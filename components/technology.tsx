import { SectionHead } from './section-head'

const stacks = [
  {
    title: 'Frontend',
    text: 'Browser-first rendering for a fast tactical grid interface.',
    tags: ['HTML5', 'CSS3', 'Canvas API', 'JavaScript'],
  },
  {
    title: 'Networking',
    text: 'Client-to-client match flow via PeerJS data channels.',
    tags: ['PeerJS'],
  },
  {
    title: 'Backend',
    text: 'Static file server (Flask), deployment pending.',
    tags: ['Python', 'Flask'],
  },
  {
    title: 'Infrastructure',
    text: 'Not yet deployed — planned as part of the production rollout.',
    tags: ['Planned'],
  },
]

export function Technology() {
  return (
    <section id="technology" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Technology Stack"
          title="Web-native rendering, P2P networking, evolving backend."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stacks.map((s) => (
            <article
              key={s.title}
              className="rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-primary">
                {s.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
