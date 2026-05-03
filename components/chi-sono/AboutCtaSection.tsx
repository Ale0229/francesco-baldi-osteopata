import { FaCalendarAlt } from 'react-icons/fa'

export default function AboutCtaSection() {
  return (
    <section className="bg-navy py-[5.5rem] text-center">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="mx-auto mb-8 h-0.5 w-10 bg-sage" />

        <h2 className="mb-4 font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold leading-[1.2] text-off-white">
          Vieni a conoscermi
        </h2>

        <p className="mx-auto mb-9 max-w-[520px] text-[0.97rem] leading-[1.7] text-off-white/55">
          La prima visita è un momento di ascolto. Nessun impegno, solo una conversazione.
        </p>

        <a
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-[5px] bg-sage px-8 py-3.5 text-[0.83rem] font-medium tracking-[0.06em] text-off-white transition-all duration-300 hover:-translate-y-px hover:bg-[#7db89a] hover:shadow-[0_6px_20px_rgba(107,158,130,0.35)]"
        >
          <FaCalendarAlt className="text-sm" />
          Prenota una visita
        </a>

      </div>
    </section>
  )
}
