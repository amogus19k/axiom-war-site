import { SectionHead } from './section-head'

const features = [
  {
    symbol: 'Σ',
    title: 'Mathematical Combat',
    text: 'Equations compile directly into battlefield vectors, allowing players to turn raw calculation into grid control.',
  },
  {
    symbol: 'λ',
    title: 'Algorithmic Strategy',
    text: 'Chain deterministic commands and schedule grid behaviors for long-term tactical and positional advantage.',
  },
  {
    symbol: '↔',
    title: 'Peer-to-Peer Matches',
    text: 'Real-time multiplayer matches run frame-by-frame via PeerJS, ensuring zero server lag and absolute synchronization.',
  },
  {
    symbol: '∫',
    title: 'Python Telemetry Layer',
    text: 'A lightweight backend handles secure match logging, historical telemetry, and calculation performance analysis.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-grid-fine border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Core Features"
          title="Competitive strategy built on mathematical systems."
          lead="Axiom War combines classic RTS pressure with equation-first mechanics and infrastructure designed for measurable multiplayer growth."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="flex flex-col rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span
                className="mb-6 grid h-12 w-12 place-items-center rounded-sm border border-primary/40 bg-primary/10 font-mono text-xl font-bold text-primary"
                aria-hidden="true"
              >
                {f.symbol}
              </span>
              <h3 className="mb-3 text-lg font-bold tracking-tight">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
