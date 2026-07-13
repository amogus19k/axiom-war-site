import { SectionHead } from './section-head'

const mechanics = [
  {
    id: '01',
    title: 'Equation-Driven Orders',
    text: 'Every strategic action begins as a mathematical expression typed in real time, resolving directly into a grid command.',
  },
  {
    id: '02',
    title: 'Mathematical Depth',
    text: 'Build strategies around numerical matrices, vector rotations, and coordinate positioning rather than hotkey memorization.',
  },
  {
    id: '03',
    title: 'Deterministic Ticks',
    text: 'The simulation advances through strict, predictable state cycles. Every calculated move executes instantly and identically for both players.',
  },
  {
    id: '04',
    title: 'RTS Identity',
    text: 'Resource pressure, tactical positioning, and fast counter-play remain core, but your main weapon is how fast you can calculate.',
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="About & Gameplay"
          title="A calculator grid becomes a tactical battlefield."
          lead="Axiom War transforms pure mathematical logic into real-time strategy. The battlefield is a coordinate grid where every compiled equation instantly translates into unit vectors, state shifts, and territory capture. Victory doesn't depend on raw APM, but on the speed and precision of your calculations."
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
