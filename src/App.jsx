import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import StatsBar from './components/sections/StatsBar'
import Doctors from './components/sections/Doctors'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import BookingSection from './components/sections/BookingSection'
import WhatsAppFab from './components/ui/WhatsAppFab'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Doctors />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

export default App
