// shabl
import { GameplayPreview } from '@/components/gameplay-preview'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Technology } from '@/components/technology'
import { Aws } from '@/components/aws'
import { Architecture } from '@/components/architecture'
import { Development } from '@/components/development'
import { BetaCta } from '@/components/beta-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <GameplayPreview />
        <About />
        <Features />
        <Technology />
        <Aws />
        <Architecture />
        <Development />
        <BetaCta />
      </main>
      <SiteFooter />
    </>
  )
}
