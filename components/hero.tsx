const stats = [
  { value: '2D', label: 'Calculator-grid battlefield' },
  { value: 'P2P', label: 'PeerJS multiplayer prototype' },
  { value: '100%', label: 'Deterministic simulation' },
]

const ticker = ['x² + y² = r²', 'f(n) → command', 'Δt = lockstep', 'π · vector', 'grid[7][9]']

export function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Mathematical gameplay notation">
          {ticker.map((t) => (
            <span
              key={t}
              className="rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-xs text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mb-5 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          Indie deep-tech game studio · deterministic strategy systems
        </p>

        <h1 className="mb-6 max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          The Algorithmic RTS Where Math Commands the Battlefield
          <span className="cursor-blink text-primary" aria-hidden="true">
            _
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          A deterministic 2D real-time strategy driven by mathematical expressions. No RNG, no
          speed-clicking — pure system design, P2P match simulation, and dedicated server
          architecture executed on a calculator grid.
        </p>

        <div className="mb-14 flex flex-wrap gap-4">
          <a
            href="#contacts"
            className="inline-flex min-h-12 items-center rounded-sm bg-primary px-7 font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join Beta Test
          </a>
          <a
            href="#features"
            className="inline-flex min-h-12 items-center rounded-sm border border-border bg-card px-7 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
          >
            Explore Mechanics
          </a>
        </div>

        <dl className="grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="bg-card p-5">
              <dt className="mb-1 font-mono text-2xl font-bold text-primary">{s.value}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
