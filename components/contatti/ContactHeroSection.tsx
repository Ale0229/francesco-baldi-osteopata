export default function ContactHeroSection() {
  return (
    <div className="relative overflow-hidden bg-navy pb-20 pt-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 30% 80%, rgba(107,158,130,0.07) 0%, transparent 55%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
          Prenota una visita
        </p>
        <h1 className="mb-4 font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] text-off-white">
          Contatti
        </h1>
        <div className="mb-5 h-0.5 w-10 bg-sage" />
        <p className="max-w-[520px] text-[0.97rem] leading-[1.7] text-off-white/55">
          Siamo a Modugno (BA). Contattaci per fissare un appuntamento o per
          qualsiasi informazione sul percorso osteopatico più adatto a te.
        </p>
      </div>
    </div>
  )
}
