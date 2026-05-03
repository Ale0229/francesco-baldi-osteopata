import Image from 'next/image'

export default function AboutBioSection() {
  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-start gap-20 lg:grid-cols-[5fr_7fr]">

          {/* Foto */}
          <div className="mx-auto w-full max-w-[320px] lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[5px]">
              <Image
                src="/images/francesco-baldi.webp"
                alt="Dott. Francesco Baldi — Osteopata e Fisioterapista"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Decorative border */}
            
          </div>

          {/* Bio */}
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
              La mia storia
            </p>
            <h2 className="mb-4 font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.2] text-navy">
              Un percorso nato dalla passione per il corpo umano
            </h2>
            <div className="mb-7 h-0.5 w-10 bg-sage" />
            <p className="mb-5 text-[0.97rem] leading-[1.85] text-body">
              Mi chiamo Francesco Baldi e da anni mi occupo di osteopatia e fisioterapia manuale nel mio studio di Modugno. Ho scelto questa professione per una ragione semplice: credo che il corpo abbia una straordinaria capacità di autoguarigione, e il mio ruolo è quello di aiutarlo a ritrovare il proprio equilibrio.
            </p>
            <p className="mb-5 text-[0.97rem] leading-[1.85] text-body">
              Dopo aver completato la mia formazione in osteopatia, ho approfondito le tecniche manuali lavorando con pazienti di ogni età: neonati, bambini, adulti, anziani, donne in gravidanza e sportivi. Ogni persona che entra nel mio studio riceve un percorso su misura, perché non esiste un trattamento uguale per tutti.
            </p>
            <p className="text-[0.97rem] leading-[1.85] text-body">
              Credo nell&apos;ascolto come primo strumento di cura. Prima ancora delle mani, è fondamentale capire chi ho di fronte. Il dolore racconta una storia: il mio compito è saperla leggere.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
