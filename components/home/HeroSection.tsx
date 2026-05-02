import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-off-white">

      {/* Immagine — absolute sulla metà destra del viewport, edge-to-edge */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/images/Trattamento-trauma.webp"
          alt="Trattamento osteopatico — Dott. Francesco Baldi"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Testo — stesso container del header: max-w-7xl mx-auto px-6 */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-24 md:px-8">
        <div className="w-full space-y-8 lg:w-1/2 lg:pr-16">

          <p className="text-xs uppercase tracking-[0.35em] text-sage/80 sm:text-sm">
            Osteopata · Fisioterapista · Modugno (BA)
          </p>

          <div className="space-y-4">
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Benessere.</span>
              <span className="block text-sage">Equilibrio.</span>
              <span className="block">Movimento.</span>
            </h1>
            <p className="text-base leading-8 text-off-white/70 sm:text-lg">
              Studio di Osteopatia e Fisioterapia Manuale —{' '}
              <br className="hidden sm:block" />
              Dott. Francesco Baldi, Via Cesare Battisti 91, Modugno (BA)
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/contatti"
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-sage px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:bg-sage/90 sm:w-auto"
            >
              Prenota una visita
            </a>
            <a
              href="/servizi"
              className="inline-flex w-full items-center justify-center rounded-[5px] border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-off-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              Scopri i miei servizi
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
