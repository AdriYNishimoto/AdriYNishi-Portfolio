import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-24 sm:py-28 lg:py-32", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  index,
  kanji,
  eyebrow,
  title,
  description,
  className,
}: {
  index?: string;
  kanji?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {index && <span className="text-accent">{index}</span>}
        {kanji && (
          <span className="font-jp text-sm normal-case tracking-normal" lang="ja">
            {kanji}
          </span>
        )}
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
