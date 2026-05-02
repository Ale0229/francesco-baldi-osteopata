import { getReviews } from '@/lib/reviews'
import TestimonialCard from '@/components/ui/TestimonialCard'

export default async function TestimonialsSection() {
  const reviews = await getReviews()

  return (
    <section className="bg-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
            Recensioni
          </p>
          <h2 className="mb-3 font-serif text-[clamp(1.75rem,3.5vw,2.6rem)] font-semibold leading-[1.2] text-navy">
            Cosa dicono i pazienti
          </h2>
          <div className="mx-auto h-0.5 w-10 bg-sage" />
        </div>

        {/* Grid 3 colonne */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <TestimonialCard key={i} review={review} />
          ))}
        </div>

      </div>
    </section>
  )
}
