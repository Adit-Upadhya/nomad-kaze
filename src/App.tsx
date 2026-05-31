import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import StatsBar from './components/StatsBar'
import Tours from './components/Tours'
import RouteMap from './components/RouteMap'
import WhyUs from './components/WhyUs'
import Fleet from './components/Fleet'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Ticker />
      <StatsBar />
      <Tours />
      <RouteMap />
      <WhyUs />
      <Fleet />
      <Testimonials />
      <BookingForm />
      <CTA />
    </main>
    <Footer />
  </>
)

export default App
