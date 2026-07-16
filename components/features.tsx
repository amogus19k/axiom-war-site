import { SectionHead } from './section-head'

const features = [
  {
    symbol: '↔',
    title: 'Peer-to-Peer Matches',
    text: 'Real-time multiplayer runs over PeerJS data channels. Client-to-client architecture keeps the simulation lightweight and server-independent.',
  },
  {
    symbol: 'AI',
    title: 'AI Opponent',
    text: 'Practice against a grid-based AI that builds bases, manages fog of war, and applies tactical pressure — a sparring partner for strategy refinement.',
  },
  {
    symbol: '◎',
    title: 'Fog of War',
    text: 'Limited visibility drives reconnaissance and scouting decisions. Map control rewards calculated risk-taking and intelligent unit placement.',
  },
  {
    symbol: '◈',
    title: 'Base Building',
    text: 'Construct and expand your base on the grid. Synthesize units, upgrade defensive towers, and balance economy against military output.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-grid-fine border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Core Features"
          title="Competitive strategy built on grid-based systems."
          lead="AxiomWar combines classic RTS depth — base building, fog of war, unit control — with a P2P networking model designed for direct, server-free matches."
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
