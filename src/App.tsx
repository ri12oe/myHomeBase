import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromiseStrip from './components/promisStrip'
import Statement from './components/statement'
import Comparsion from './components/comparsion'
import HowItWorks from './components/howItWorks'
import Features from './components/features' 
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PromiseStrip />
      <Statement />
      <Comparsion />
      <HowItWorks />
      <Features />
    </>
  )
}