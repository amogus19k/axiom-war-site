export function BetaCta() {
  return (
    <section id="contacts" className="bg-grid border-b border-border py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl rounded-sm border border-border bg-card p-10 text-center md:p-16">
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {'> '}Closed Beta
          </p>
          <h2 className="mb-4 text-balance text-4xl font-black tracking-tight md:text-6xl">
            Join Closed Beta
            <span className="cursor-blink text-primary" aria-hidden="true">
              _
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Receive development updates and early access invitations for the Axiom War prototype.
          </p>
          <a
            href="mailto:founder@axiomwar.site?subject=Closed%20Beta"
            className="inline-flex min-h-12 items-center rounded-sm bg-primary px-8 font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact the Team
          </a>
        </div>
      </div>
    </section>
  )
}
