import { SectionHead } from './section-head'

const cards = [
  {
    title: 'Player Systems',
    text: 'Authentication, player identity, and future progression services can evolve without overloading the core game simulation.',
  },
  {
    title: 'Match Intelligence',
    text: 'Historical match data, telemetry streams, and analytics pipelines help improve balance, performance, and competitive integrity.',
  },
  {
    title: 'Live Operations',
    text: 'Scalable backend services provide a stable base for closed beta expansion, ranked features, events, and future multiplayer operations.',
  },
]

export function Aws() {
  return (
    <section id="aws" className="bg-grid-fine border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Cloud Foundation"
          title="Why AWS"
          lead="AWS powers the cloud infrastructure behind Axiom War. We use it for player authentication, match history, telemetry, analytics, and scalable backend services — a reliable foundation for future competitive multiplayer and live operations."
        />

        <div className="grid gap-4 lg:grid-cols-5">
          <article className="relative overflow-hidden rounded-sm border border-border bg-card p-8 lg:col-span-2">
            <span
              className="pointer-events-none absolute right-4 top-4 font-mono text-4xl font-black uppercase tracking-widest text-primary/10"
              aria-hidden="true"
            >
              CMD
            </span>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              Battle-ready infrastructure
            </p>
            <h3 className="mb-4 text-balance text-xl font-bold tracking-tight">
              Cloud services that support deterministic gameplay at scale.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The game client stays lean and real-time, while AWS handles the persistent systems
              around it: account identity, secure service APIs, telemetry pipelines, analytics
              processing, and the infrastructure required for long-term live support.
            </p>
          </article>

          <div className="grid gap-4 lg:col-span-3">
            {cards.map((c) => (
              <article
                key={c.title}
                className="flex flex-col gap-2 rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:flex-row sm:items-start sm:gap-6"
              >
                <h3 className="shrink-0 font-mono text-sm font-bold uppercase tracking-widest text-primary sm:w-44">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
