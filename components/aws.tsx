import { SectionHead } from './section-head'

const cards = [
  {
    title: 'AI-Driven Engineering',
    text: 'We utilize Kiro\'s advanced AI agents to accelerate core systems development, automatically generating infrastructure-as-code (Terraform) templates and orchestration workflows to sync our persistent game states.',
  },
  {
    title: 'Automated Verification',
    text: 'To ensure flawless lockstep performance, we use Kiro to rapidly scale our test coverage, automated test beds, and QA scenarios—drastically reducing development cycles.',
  },
  {
    title: 'Cloud Foundation',
    text: 'AWS powers the heavy lifting behind Axiom War, driving player identity management, match history tracking, telemetry streams, and the robust socket-server backend required for low-latency live operations.',
  },
]

export function Aws() {
  return (
    <section id="aws" className="bg-grid-fine border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Cloud Foundation"
          title="Why Kiro & AWS"
          lead="Axiom War is a deep-tech deterministic RTS with a massive, mathematical backend execution. Managing a complex, zero-RNG lockstep simulation as an indie developer requires extreme development velocity and rock-solid architecture. We rely on Kiro's agentic engineering and AWS infrastructure to build, test, and deploy a production-grade game systems ecosystem at scale."
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
              Agentic. Cloud. Verified.
            </p>
            <h3 className="mb-4 text-balance text-xl font-bold tracking-tight">
              Kiro orchestrates the pipeline — AWS runs the stack.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              From AI-generated Terraform to lockstep test automation, every layer of Axiom War is
              engineered for speed and reliability. Kiro accelerates development while AWS provides
              the battle-tested infrastructure to support deterministic multiplayer at scale.
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
