const steps = [
  {
    number: '01',
    title: 'Anamnesi',
    text: 'Ascolto attivo della tua storia clinica, delle abitudini quotidiane e dei sintomi. Ogni dettaglio è importante.',
  },
  {
    number: '02',
    title: 'Valutazione',
    text: 'Esame posturale e test osteopatici per individuare le disfunzioni, anche distanti dalla sede del dolore.',
  },
  {
    number: '03',
    title: 'Trattamento',
    text: 'Tecniche manuali personalizzate, scelte in base alle tue esigenze, per restituire equilibrio al tuo corpo.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="mb-16 text-center">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
            Il percorso
          </p>
          <h2 className="mb-3 font-serif text-[clamp(1.75rem,3.5vw,2.6rem)] font-semibold leading-[1.2] text-navy">
            Come si svolge una seduta
          </h2>
          <div className="mx-auto mb-5 h-0.5 w-10 bg-sage" />
          <p className="mx-auto max-w-[560px] text-[1rem] leading-[1.7] text-muted">
            Ogni seduta segue un protocollo preciso, sempre adattato alla persona.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Connecting line — matches reference: left/right = calc(16.66% + 1.2rem) */}
          <div
            className="absolute top-[2.1rem] hidden h-px md:block"
            style={{
              left: 'calc(16.66% + 1.2rem)',
              right: 'calc(16.66% + 1.2rem)',
              background: 'linear-gradient(to right, #6B9E82, rgba(107,158,130,0.25), #6B9E82)',
            }}
          />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative z-10 mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-sage text-off-white">
                <span className="font-serif text-xl font-semibold">{step.number}</span>
              </div>
              <h3 className="mb-3 font-serif text-[1.15rem] font-semibold text-navy">
                {step.title}
              </h3>
              <p className="text-[0.93rem] leading-[1.75] text-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
