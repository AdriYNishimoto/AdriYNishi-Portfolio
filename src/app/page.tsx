export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6">
      <p className="font-mono text-sm text-subtle">
        <span className="font-jp">西本</span> · em construção
      </p>
      <h1 className="mt-4 text-5xl font-semibold text-foreground">Adriano Nishimoto</h1>
      <p className="mt-3 text-lg text-muted">Back-end &amp; Full Stack Developer</p>
      <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted">
        <span className="size-2 rounded-full bg-seal" aria-hidden />
        Disponível para oportunidades
      </span>
    </main>
  );
}
