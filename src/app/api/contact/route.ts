import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10).max(5000),
  // Honeypot: real people never see this field, bots fill everything.
  website: z.string().max(0).optional(),
});

/**
 * Best-effort rate limit. Serverless instances don't share memory, so this
 * only slows down a burst hitting the same instance — the honeypot and the
 * schema do the heavier lifting. Swap for Upstash if abuse ever shows up.
 */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((ts) => now - ts < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "rate_limited" },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, company, phone, subject, message, website } = parsed.data;

  // Bot caught by the honeypot — answer 200 so it doesn't retry, but send nothing.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form is missing Resend environment variables.");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const body = [
    `Nome: ${name}`,
    `E-mail: ${email}`,
    company ? `Empresa: ${company}` : null,
    phone ? `Telefone/WhatsApp: ${phone}` : null,
    `Assunto: ${subject}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[Portfólio] ${subject}`,
    text: body,
  });

  if (error) {
    console.error("Resend failed to send the contact email:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
