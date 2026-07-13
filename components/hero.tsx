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
          The Algorithmic RTS
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
          <a
            href="https://github.com/amogus19k/axiom-war"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-border bg-card px-7 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Source
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
