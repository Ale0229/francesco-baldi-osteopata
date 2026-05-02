import Image from 'next/image'
import { FaHandsHelping, FaLeaf, FaUsers } from 'react-icons/fa'
import FeatureCard from '@/components/ui/FeatureCard'

const features = [
  {
    icon: FaHandsHelping,
    title: 'Approccio Globale',
    text: 'Il corpo è un sistema integrato. L\'osteopatia individua e tratta le cause profonde, non solo i sintomi superficiali.',
  },
  {
    icon: FaLeaf,
    title: '100% Naturale',
    text: 'Nessun farmaco, nessuna invasività. Solo mani esperte guidate da decenni di formazione e ascolto.',
  },
  {
    icon: FaUsers,
    title: 'Per Tutti',
    text: 'Neonati, bambini, adulti, anziani, donne in gravidanza, sportivi: l\'osteopatia si adatta a ogni paziente.',
  },
]

export default function AboutSection() {
  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Bio grid — 1fr 2fr */}
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_2fr]">

          {/* Foto circolare */}
          <div className="mx-auto w-full max-w-[280px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-full border border-sage/25 shadow-[0_4px_24px_rgba(21,32,61,0.08)]">
              <Image
                src="/images/francesco-baldi.webp"
                alt="Dott. Francesco Baldi — Osteopata e Fisioterapista"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Testo */}
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
              Chi è Francesco Baldi
            </p>
            <h2 className="mb-4 font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.2] text-navy">
              Un osteopata che mette la persona al centro
            </h2>
            <div className="mb-6 h-0.5 w-10 bg-sage" />
            <p className="mb-5 text-[0.97rem] leading-[1.8] text-body">
              Francesco Baldi è osteopata e fisioterapista con studio a Modugno. Tratta adulti,
              bambini, donne in gravidanza, anziani e sportivi con un approccio integrato e
              personalizzato, prendendo in cura l&apos;intera persona, non solo il sintomo.
            </p>
            <p className="mb-8 text-[0.97rem] leading-[1.8] text-body">
              Ogni seduta nasce dall&apos;ascolto. Prima ancora delle mani, è fondamentale capire
              chi hai di fronte — la storia, le abitudini, le tensioni. Il corpo parla: il mio
              compito è interpretarlo.
            </p>
            <a
              href="/chi-sono"
              className="inline-flex items-center gap-2 text-[0.83rem] font-medium text-sage transition-all duration-200 hover:gap-3"
            >
              Leggi la mia storia <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Sezione feature — header centrato + 3 card */}
        <div className="mt-24">
          <div className="mb-16 text-center">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
              Perché l&apos;Osteopatia
            </p>
            <h2 className="mb-3 font-serif text-[clamp(1.75rem,3.5vw,2.6rem)] font-semibold leading-[1.2] text-navy">
              Un approccio che fa la differenza
            </h2>
            <div className="mx-auto mb-5 h-0.5 w-10 bg-sage" />
            <p className="mx-auto max-w-[560px] text-[1rem] leading-[1.7] text-muted">
              L&apos;osteopatia non è soltanto una terapia. È una filosofia di cura che
              considera il corpo nella sua totalità.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
