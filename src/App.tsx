import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
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
export default function App() {
  return (
    // LazyMotion loads only the animation features we use (smaller bundle).
    // `strict` makes it an error to use the full `motion.*` components — use `m.*`.
    // reducedMotion="user" skips movement for people who turn motion off on their device.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
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
      </MotionConfig>
    </LazyMotion>
  )
}