'use client'

import dynamic from 'next/dynamic'

const ContactMap = dynamic(() => import('./ContactMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-[5px] bg-sage/10" />
  ),
})

export default function ContactMapWrapper() {
  return <ContactMap />
}
