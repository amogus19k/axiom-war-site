import { SectionHead } from './section-head'

const mechanics = [
  {
    id: '01',
    title: 'Fog of War',
    text: 'Limited visibility forces careful reconnaissance and tactical scouting. Map control is earned through calculated advances and risk assessment.',
  },
  {
    id: '02',
    title: 'Base Building & Synthesis',
    text: 'Construct production structures and synthesize units directly on the grid. Expand your economy while managing defensive lines.',
  },
  {
    id: '03',
    title: 'Formations & Unit Split',
    text: 'Arrange units into tactical formations and split squads on the fly to multi-task, flank, or hold chokepoints.',
  },
  {
    id: '04',
    title: 'Tower Upgrades',
    text: 'Fortify positions with upgradable defensive towers. Allocate resources between static defense and mobile army pressure.',
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="About & Gameplay"
          title="A calculator grid becomes a tactical battlefield."
          lead="AxiomWar is a prototype 2D RTS played on a coordinate grid. Players build bases, manage fog of war, control unit formations, and face off via P2P or against an AI opponent — classic strategy depth on a minimal, calculation-focused canvas."
        />

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {mechanics.map((m) => (
            <article key={m.id} className="group bg-card p-7 transition-colors hover:bg-secondary">
              <span className="mb-5 block font-mono text-xs font-bold text-primary">
                {'// '}
                {m.id}
              </span>
              <h3 className="mb-3 text-lg font-bold tracking-tight">{m.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
