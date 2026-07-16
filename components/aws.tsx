import { SectionHead } from './section-head'

const cards = [
  {
    title: 'Compute & Deployment',
    text: 'We plan to run dedicated match servers on AWS compute (EC2/Fargate) to support server-side validation and matches beyond what pure P2P can reliably handle at scale.',
  },
  {
    title: 'Data & Telemetry',
    text: 'Player identity, match history, and telemetry data will live on AWS-managed storage (RDS/DynamoDB), giving us a persistent, queryable record of gameplay as the player base grows.',
  },
  {
    title: 'Low-Latency Hosting',
    text: 'Once we move past local prototyping, AWS global infrastructure is what we are building toward for the low-latency hosting and networking that live multiplayer operations need.',
  },
]

export function Aws() {
  return (
    <section id="aws" className="bg-grid-fine border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Cloud Foundation"
          title="Why AWS"
          lead="AxiomWar is a deep-tech deterministic RTS with a massive, mathematical backend execution. Managing a complex, zero-RNG lockstep simulation as an indie developer requires rock-solid cloud infrastructure — from match servers and player data to low-latency networking. We are planning to use AWS to take the game from a local prototype to a production-grade, scalable multiplayer service, accelerating development with tools like Kiro along the way."
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
              Cloud. Scalable. Planned.
            </p>
            <h3 className="mb-4 text-balance text-xl font-bold tracking-tight">
              AWS will run the stack.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our plan is to run match servers, player data, and telemetry on AWS battle-tested
              infrastructure — the foundation needed to support deterministic multiplayer at scale
              as we move out of local prototyping.
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
