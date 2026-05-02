import type { IconType } from 'react-icons'

type Props = {
  icon: IconType
  title: string
  text: string
}

export default function ServiceCard({ icon: Icon, title, text }: Props) {
  return (
    <div className="rounded-[5px] border border-sage/20 bg-white/[0.04] px-6 py-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-sage hover:bg-sage/[0.08]">
      <Icon className="mb-4 text-[1.35rem] text-sage" />
      <h3 className="mb-1.5 font-serif text-[0.98rem] leading-[1.3] text-off-white">{title}</h3>
      <p className="text-[0.78rem] leading-[1.55] text-off-white/45">{text}</p>
    </div>
  )
}
