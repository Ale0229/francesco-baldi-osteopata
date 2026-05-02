import type { IconType } from 'react-icons'

type Props = {
  icon: IconType
  title: string
  text: string
}

export default function FeatureCard({ icon: Icon, title, text }: Props) {
  return (
    <div className="rounded-[5px] border border-sage/20 bg-white px-8 py-10 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-[0_10px_40px_rgba(21,32,61,0.14)]">
      <Icon className="mb-5 text-[1.6rem] text-sage" />
      <h3 className="mb-2.5 font-serif text-[1.15rem] text-navy">{title}</h3>
      <p className="text-[0.88rem] leading-[1.75] text-muted">{text}</p>
    </div>
  )
}
