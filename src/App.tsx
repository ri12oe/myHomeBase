import { useEffect } from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { startSmoothScroll } from './components/smoothScroll'
import ConceptBanner from './components/ConceptBanner'
import ThemeMenu from './components/ThemeMenu'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromiseStrip from './components/promisStrip'
import Statement from './components/statement'
import Comparsion from './components/comparsion'
import HowItWorks from './components/howItWorks'
import Features from './components/features'
import Services from './components/services'
import FAQ from './components/FAQ'
import FinalCTA from './components/finalCTA'
import Footer from './components/footer'

// "Design concept — not affiliated with MyHomeBase" bar above the nav.
// Keep it on while this is an unofficial concept.
const SHOW_CONCEPT_BANNER = true

// Floating palette / light-dark switcher (bottom-left). Set to false to hide it
// before launch — the site then stays on the default Blue, light theme.
const SHOW_THEME_MENU = true

export default function App() {
  // Soft, eased wheel/trackpad scrolling for the whole page (see smoothScroll.ts)
  useEffect(() => startSmoothScroll(), [])

  return (
    // LazyMotion loads only the animation features we use (smaller bundle).
    // `strict` makes it an error to use the full `motion.*` components — use `m.*`.
    // reducedMotion="user" skips movement for people who turn motion off on their device.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        {SHOW_CONCEPT_BANNER && <ConceptBanner />}
        <Navbar />
        <Hero />
        <PromiseStrip />
        <Statement />
        <Comparsion />
        <HowItWorks />
        <Features />
        <Services />
        <FAQ />
        <FinalCTA />
        <Footer />
        {SHOW_THEME_MENU && <ThemeMenu />}
      </MotionConfig>
    </LazyMotion>
  )
}
