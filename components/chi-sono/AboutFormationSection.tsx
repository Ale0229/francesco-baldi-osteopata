const timeline = [
  {
    year: 'Aggiornamento continuo',
    title: 'Corsi e Seminari',
    text: 'Formazione continua in osteopatia viscerale, cranio-sacrale e trattamento della donna in gravidanza.',
  },
  {
    year: 'Specializzazione',
    title: 'Fisioterapia Manuale',
    text: 'Percorso avanzato in terapia manuale ortopedica e riabilitazione funzionale.',
  },
  {
    year: 'Specializzazione',
    title: 'Osteopatia Pediatrica e Neonatale',
    text: 'Approfondimento specifico nel trattamento di neonati e bambini, con focus su plagiocefalia e coliche.',
  },
  {
    year: 'Formazione',
    title: 'Diploma in Osteopatia (D.O.)',
    text: 'Formazione quinquennale in osteopatia strutturale, viscerale e cranica presso istituto accreditato.',
  },
]

import ValueCard from '@/components/ui/ValueCard'

const values = [
  {
    title: 'Ascolto',
    text: 'Ogni paziente racconta una storia unica. La visita inizia sempre con il silenzio e la parola, non con le mani.',
  },
  {
    title: 'Competenza',
    text: 'Formazione continua, aggiornamento costante. La medicina osteopatica evolve e io con essa.',
  },
  {
    title: 'Rispetto',
    text: 'Del corpo, dei tempi e delle esigenze di ogni persona. Non esiste un trattamento uguale per tutti.',
  },
  {
    title: 'Risultati',
    text: "L'obiettivo è il tuo benessere concreto, misurabile, duraturo. Non un palliativo, ma una soluzione.",
  },
]

export default function AboutFormationSection() {
  return (
    <section className="border-t border-sage/[0.12] bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-20 lg:grid-cols-2">

          {/* Timeline */}
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
              Percorso formativo
            </p>
            <h2 className="mb-4 font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-[1.2] text-navy">
              Formazione e credenziali
            </h2>
            <div className="mb-8 h-0.5 w-10 bg-sage" />

            <div className="relative">
              {/* Vertical line — centered on the 7px dot (left: 3px) */}
              <div
                className="absolute bottom-0 left-[3px] top-[0.55rem] w-px"
                style={{ background: 'linear-gradient(to bottom, #6B9E82, rgba(107,158,130,0.1))' }}
              />
              {timeline.map((t) => (
                <div key={t.title} className="relative flex gap-5 pb-9 last:pb-0">
                  {/* Dot — flex-shrink-0, mt aligns it with the year label's cap height */}
                  <div className="z-10 mt-[0.3rem] h-[7px] w-[7px] flex-shrink-0 rounded-full bg-sage" />
                  <div>
                    <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-sage">
                      {t.year}
                    </p>
                    <h4 className="mb-1 font-serif text-[1rem] font-semibold text-navy">
                      {t.title}
                    </h4>
                    <p className="text-[0.855rem] leading-[1.6] text-muted">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
              I miei valori
            </p>
            <h2 className="mb-4 font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-[1.2] text-navy">
              Cosa guida il mio lavoro
            </h2>
            <div className="mb-8 h-0.5 w-10 bg-sage" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <ValueCard key={v.title} title={v.title} text={v.text} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
