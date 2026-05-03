import { Metadata } from 'next'
import ContactHeroSection from '@/components/contatti/ContactHeroSection'
import ContactFormSection from '@/components/contatti/ContactFormSection'
import ContactInfoSection from '@/components/contatti/ContactInfoSection'

export const metadata: Metadata = {
  title: 'Contatti | Dott. Francesco Baldi — Osteopata Modugno',
  description:
    'Prenota una visita osteopatica a Modugno (BA). Contatta il Dott. Francesco Baldi per informazioni o appuntamenti.',
}

export default function ContattiPage() {
  return (
    <>
      <ContactHeroSection />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <ContactFormSection />
            <ContactInfoSection />
          </div>
        </div>
      </section>
    </>
  )
}
