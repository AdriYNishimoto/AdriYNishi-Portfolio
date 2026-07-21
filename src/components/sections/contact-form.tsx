"use client";

import { useRef, useState, type FormEvent } from "react";
import { CircleCheck, LoaderCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string[] | undefined>;

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent";

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const successRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorKey(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        // Move focus so screen readers land on the confirmation.
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }

      const result = await response.json().catch(() => ({}));
      setFieldErrors(result.fieldErrors ?? {});
      setErrorKey(
        response.status === 429
          ? "errorRateLimited"
          : response.status === 400
            ? "errorValidation"
            : "errorGeneric",
      );
      setStatus("error");
    } catch {
      setErrorKey("errorGeneric");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-lg border border-border bg-surface p-8 text-center"
      >
        <CircleCheck className="mx-auto size-9 text-positive" />
        <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
          {t("successTitle")}
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
          {t("successBody")}
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          {t("sendAnother")}
        </Button>
      </div>
    );
  }

  const invalid = (field: string) => Boolean(fieldErrors[field]);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder={t("placeholderName")}
            aria-invalid={invalid("name")}
            className={cn(fieldClass, invalid("name") && "border-red-500/70")}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
            placeholder={t("placeholderEmail")}
            aria-invalid={invalid("email")}
            className={cn(fieldClass, invalid("email") && "border-red-500/70")}
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            {t("company")}{" "}
            <span className="font-normal text-subtle">({t("optional")})</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder={t("placeholderCompany")}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            {t("phone")}{" "}
            <span className="font-normal text-subtle">({t("optional")})</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={t("placeholderPhone")}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          {t("subject")}
        </label>
        <input
          id="subject"
          name="subject"
          required
          placeholder={t("placeholderSubject")}
          aria-invalid={invalid("subject")}
          className={cn(fieldClass, invalid("subject") && "border-red-500/70")}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("placeholderMessage")}
          aria-invalid={invalid("message")}
          className={cn(
            fieldClass,
            "resize-y",
            invalid("message") && "border-red-500/70",
          )}
        />
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" && (
            <LoaderCircle className="size-4 animate-spin" />
          )}
          {status === "submitting" ? t("sending") : t("send")}
        </Button>

        <p role="alert" aria-live="polite" className="text-sm text-red-400">
          {errorKey ? t(errorKey) : ""}
        </p>
      </div>
    </form>
  );
}
