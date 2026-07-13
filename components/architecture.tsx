import { SectionHead } from './section-head'

const flows = [
  {
    title: 'Realtime Match Flow',
    steps: [
      {
        name: 'P2P Networking',
        text: 'Direct client-to-client browser architecture for core simulation.',
      },
      {
        name: 'Deterministic Lockstep',
        text: 'Synchronized tick simulation across peers.',
      },
      {
        name: 'Canvas Rendering',
        text: 'Frame-focused 2D RTS view on a coordinate grid.',
      },
    ],
  },
  {
    title: 'Telemetry Flow',
    steps: [
      {
        name: 'Game Client Core',
        text: 'Web-native JavaScript logic compiles equations into commands.',
      },
      {
        name: 'Python Backend',
        text: 'Secure match logging and performance telemetry.',
      },
      {
        name: 'Analytics Layer',
        text: 'Historical match review and calculation performance analysis.',
      },
    ],
  },
]

export function Architecture() {
  return (
    <section id="architecture" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Technical Architecture"
          title="Deterministic architecture for precise multiplayer execution."
          lead="Two complementary flows separate real-time match synchronization from backend telemetry and calculation analysis."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {flows.map((flow) => (
            <article key={flow.title} className="rounded-sm border border-border bg-card p-7">
              <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-widest text-primary">
                {flow.title}
              </h3>
              <ol className="flex flex-col">
                {flow.steps.map((step, i) => (
                  <li
                    key={step.name}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border py-4 last:border-b-0 last:pb-0"
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-sm border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <strong className="mb-1 block text-sm font-bold">{step.name}</strong>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {step.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
