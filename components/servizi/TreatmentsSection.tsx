'use client'

import { useState } from 'react'
import { FaChevronDown, FaBone, FaProjectDiagram, FaBrain, FaHandHoldingMedical, FaBaby, FaFemale, FaRunning } from 'react-icons/fa'

const treatments = [
  {
    icon: FaBone,
    title: 'Osteopatia Strutturale',
    text: 'Il trattamento strutturale agisce su muscoli, articolazioni e fasce connettivali. È indicato per mal di schiena, cervicalgia, dolori articolari, ernie, colpi di frusta e tensioni muscolari croniche. Durante la seduta si utilizzano tecniche di mobilizzazione dolce, thrust e rilascio miofasciale. Dopo il trattamento molti pazienti riportano una sensazione di leggerezza e maggiore mobilità.',
  },
  {
    icon: FaProjectDiagram,
    title: 'Osteopatia Viscerale',
    text: 'Lavora sulle tensioni che coinvolgono gli organi interni e i loro legamenti. Utile per disturbi digestivi, reflusso, colon irritabile e dolori riferiti di origine viscerale.',
  },
  {
    icon: FaBrain,
    title: 'Osteopatia Cranica',
    text: 'Approccio delicato che lavora sul cranio e sul sistema nervoso centrale. Indicato per cefalee, emicranie, disturbi dell\'articolazione temporo-mandibolare e stress cronico.',
  },
  {
    icon: FaHandHoldingMedical,
    title: 'Fisioterapia Manuale',
    text: 'Tecniche manuali di riabilitazione per il recupero funzionale dopo traumi, interventi chirurgici o patologie dell\'apparato muscolo-scheletrico.',
  },
  {
    icon: FaBaby,
    title: 'Trattamento Pediatrico e Neonatale',
    text: 'Trattamento delicato e specifico per neonati e bambini. Utile per coliche, asimmetrie posturali, difficoltà di allattamento e disturbi del sonno nei primissimi mesi di vita.',
  },
  {
    icon: FaFemale,
    title: 'Trattamento in Gravidanza',
    text: 'Accompagna la donna durante i cambiamenti fisici della gravidanza, alleviando dolori lombari, tensioni pelviche e preparando il corpo al parto.',
  },
  {
    icon: FaRunning,
    title: 'Osteopatia dello Sportivo',
    text: 'Prevenzione e recupero degli infortuni per atleti di ogni livello. Migliora la performance, ripristina la mobilità articolare e riduce i tempi di recupero.',
  },
]

export default function TreatmentsSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="mb-16 text-center">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
            Cosa offro
          </p>
          <h2 className="mb-3 font-serif text-[clamp(1.75rem,3.5vw,2.6rem)] font-semibold leading-[1.2] text-navy">
            I trattamenti
          </h2>
          <div className="mx-auto mb-5 h-0.5 w-10 bg-sage" />
          <p className="mx-auto max-w-[480px] text-[1rem] leading-[1.7] text-muted">
            Clicca su ogni trattamento per scoprire di più.
          </p>
        </div>

        <div className="flex flex-col gap-[0.85rem]">
          {treatments.map((t, i) => {
            const Icon = t.icon
            const isOpen = open === i
            return (
              <div
                key={t.title}
                className="overflow-hidden rounded-[5px] border border-sage/[0.22] bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center gap-5 px-8 py-[1.4rem] text-left transition-colors duration-[250ms] ${isOpen ? 'bg-navy' : 'hover:bg-sage/[0.04]'}`}
                >
                  <span className="w-8 flex-shrink-0 text-center text-[1.2rem] text-sage">
                    <Icon />
                  </span>
                  <span className={`flex-1 font-serif text-[1.12rem] ${isOpen ? 'text-off-white' : 'text-navy'}`}>
                    {t.title}
                  </span>
                  <FaChevronDown
                    className={`flex-shrink-0 text-[0.75rem] text-sage transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-sage/[0.14] px-8 pb-[1.6rem] pt-[1.4rem]" style={{ paddingLeft: '5.25rem' }}>
                    <p className="text-[0.92rem] leading-[1.8] text-body">
                      {t.text}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
