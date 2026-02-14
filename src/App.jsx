import { useEffect, useRef, lazy, Suspense } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Authority from './sections/Authority'
import About from './sections/About'
import Services from './sections/Services'
import Hygiene from './sections/Hygiene'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Journey from './sections/Journey'
import Appointment from './sections/Appointment'
import Location from './sections/Location'
import Footer from './sections/Footer'
import FloatingButtons from './components/FloatingButtons'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <About />
        <Services />
        <Hygiene />
        <Gallery />
        <Testimonials />
        <Journey />
        <Appointment />
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
