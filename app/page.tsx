import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <section id="contactus" className="formsection">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
