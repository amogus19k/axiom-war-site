import { SectionHead } from './section-head'

export function GameplayPreview() {
  return (
    <section id="gameplay" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Gameplay Preview"
          title="See the grid in action."
          lead="Early prototype footage showing the current state of the calculator-grid battlefield."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <figure>
            <video
              src="/gif1.mp4"
              muted
              loop
              playsInline
              autoPlay
              className="w-full rounded-sm border border-border"
            >
              <p>Your browser does not support the video tag.</p>
            </video>
            <figcaption className="mt-3 text-center font-mono text-xs text-muted-foreground">
              Gameplay preview — clip 1/2
            </figcaption>
          </figure>
          <figure>
            <video
              src="/gif2.mp4"
              muted
              loop
              playsInline
              autoPlay
              className="w-full rounded-sm border border-border"
            >
              <p>Your browser does not support the video tag.</p>
            </video>
            <figcaption className="mt-3 text-center font-mono text-xs text-muted-foreground">
              Gameplay preview — clip 2/2
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
