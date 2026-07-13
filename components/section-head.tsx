export function SectionHead({
  kicker,
  title,
  lead,
}: {
  kicker: string
  title: string
  lead?: string
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-6 bg-primary" aria-hidden="true" />
        {kicker}
      </p>
      <h2 className="mb-4 text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {lead && <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  )
}
