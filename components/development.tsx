import { Check, Loader } from 'lucide-react'
import { SectionHead } from './section-head'

const checklist = [
  { done: true, text: 'Core 2D grid engine implemented for Canvas rendering.' },
  { done: true, text: 'P2P networking link operational through PeerJS.' },
  { done: false, text: 'Lockstep state synchronization — under investigation for P2P consistency.' },
  { done: false, text: 'Python telemetry / match logging backend (planned).' },
  { done: false, text: 'Terraform-based infrastructure provisioning via Kiro (planned).' },
  { done: false, text: 'Automated lockstep test coverage via Kiro (planned).' },
  { done: false, text: 'Closed beta optimization and deployment preparation ongoing.' },
]

export function Development() {
  return (
    <section id="development" className="bg-grid-fine border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              kicker="Development Status"
              title="Active prototype moving toward closed beta readiness."
              lead="Current development focuses on the core grid engine and P2P networking, with lockstep synchronization and cloud infrastructure planned as next milestones."
            />
            <p className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Closed beta preparation in progress
            </p>
          </div>

          <article className="rounded-sm border border-border bg-card p-7">
            <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-widest text-primary">
              Prototype Checklist
            </h3>
            <ul className="flex flex-col">
              {checklist.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-4 border-b border-border py-4 last:border-b-0 last:pb-0"
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-sm border font-mono text-xs font-bold ${
                      item.done
                        ? 'border-primary/40 bg-primary text-primary-foreground'
                        : 'border-border bg-secondary text-muted-foreground'
                    }`}
                    aria-hidden="true"
                  >
                    {item.done ? <Check className="h-4 w-4" /> : <Loader className="h-4 w-4" />}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    <span className="sr-only">{item.done ? 'Done:' : 'In progress:'}</span>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
