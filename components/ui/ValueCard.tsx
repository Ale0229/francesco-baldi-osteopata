interface Props {
  title: string
  text: string
}

export default function ValueCard({ title, text }: Props) {
  return (
    <div className="rounded-[5px] border-l-2 border-sage bg-sage/[0.05] px-7 py-[1.75rem]">
      <h4 className="mb-2 font-serif text-[1.05rem] font-semibold text-navy">{title}</h4>
      <p className="text-[0.86rem] leading-[1.65] text-muted">{text}</p>
    </div>
  )
}
