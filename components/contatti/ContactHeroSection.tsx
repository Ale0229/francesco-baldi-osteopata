export default function ContactHeroSection() {
  return (
    <div className="relative overflow-hidden bg-navy pb-20 pt-36 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(107,158,130,0.06) 0%, transparent 55%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
          Prenota una visita
        </p>
        <h1 className="mb-3 font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.1] text-off-white">
          Contatti
        </h1>
        <div className="mx-auto mb-4 h-0.5 w-10 bg-sage" />
        <p className="text-[0.9rem] text-off-white/55">
          Siamo a Modugno (BA) — contattaci per fissare un appuntamento
        </p>
      </div>
    </div>
  )
}
