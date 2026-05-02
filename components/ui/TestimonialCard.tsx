import type { Review } from '@/types/review'

type Props = {
  review: Review
}

export default function TestimonialCard({ review }: Props) {
  return (
    <div className="relative rounded-[5px] border border-sage/[0.12] bg-white px-8 py-10">
      {/* Virgoletta decorativa */}
      <span
        className="pointer-events-none absolute left-6 top-0.5 font-serif text-[5.5rem] leading-none text-sage opacity-20"
        aria-hidden
      >
        &ldquo;
      </span>

      <p className="relative mb-6 text-[0.92rem] italic leading-[1.8] text-body">
        {review.text}
      </p>

      <div>
        <p className="text-[0.77rem] font-semibold uppercase tracking-[0.09em] text-navy">
          {review.author}
        </p>
        <p className="mt-0.5 text-[0.76rem] text-muted">
          {review.role}{review.date ? ` · ${review.date}` : ''}
        </p>
      </div>
    </div>
  )
}
