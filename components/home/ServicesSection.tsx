import { FaBone, FaProjectDiagram, FaBrain, FaHandHoldingMedical, FaBaby } from 'react-icons/fa'
import ServiceCard from '@/components/ui/ServiceCard'

const services = [
  {
    icon: FaBone,
    title: 'Osteopatia Strutturale',
    text: 'Muscoli, articolazioni e fascia',
  },
  {
    icon: FaProjectDiagram,
    title: 'Osteopatia Viscerale',
    text: 'Organi interni e tensioni',
  },
  {
    icon: FaBrain,
    title: 'Osteopatia Cranica',
    text: 'Cranio e sistema nervoso',
  },
  {
    icon: FaHandHoldingMedical,
    title: 'Fisioterapia Manuale',
    text: 'Riabilitazione e recupero',
  },
  {
    icon: FaBaby,
    title: 'Trattamento Neonatale',
    text: 'Neonati e bambini',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
            I Miei Servizi
          </p>
          <h2 className="mb-3 font-serif text-[clamp(1.75rem,3.5vw,2.6rem)] font-semibold leading-[1.2] text-off-white">
            Trattamenti su misura per te
          </h2>
          <div className="mx-auto mb-5 h-0.5 w-10 bg-sage" />
          <p className="mx-auto max-w-[560px] text-[1rem] leading-[1.7] text-off-white/55">
            Ogni percorso è unico. Scelgo la tecnica più adatta a ogni persona, ogni volta.
          </p>
        </div>

        {/* Cards — 5 colonne su desktop */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/servizi"
            className="inline-flex items-center gap-2 rounded-[5px] border border-sage px-8 py-3.5 text-[0.83rem] font-medium tracking-[0.06em] text-off-white transition-all duration-300 hover:bg-sage/[0.12]"
          >
            Vedi tutti i servizi →
          </a>
        </div>

      </div>
    </section>
  )
}
