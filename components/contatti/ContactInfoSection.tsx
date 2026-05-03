import { FaMapMarkerAlt, FaPhone, FaClock, FaExternalLinkAlt } from 'react-icons/fa'
import ContactMapWrapper from './ContactMapWrapper'

const MAPS_URL = 'https://maps.app.goo.gl/FrVxpqYBjTkkHPYz8'

const orari = [
  { giorni: 'Lun – Ven', fasce: ['08:30 – 13:00', '15:00 – 20:30'] },
  { giorni: 'Sab – Dom', fasce: ['Chiuso'] },
]

export default function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-8">
      {/* Titolo colonna */}
      <div>
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
          Dove siamo
        </p>
        <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold leading-tight text-navy">
          Lo studio
        </h2>
        <div className="mt-3 h-0.5 w-8 bg-sage" />
      </div>

      {/* Info items */}
      <div className="flex flex-col gap-5">
        {/* Indirizzo */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-sage/30 bg-sage/10">
            <FaMapMarkerAlt className="text-[0.88rem] text-sage" />
          </div>
          <div>
            <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-navy">
              Indirizzo
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.91rem] leading-snug text-sage underline transition-colors duration-200 hover:text-sage/70"
            >
              Via Cesare Battisti, 91 - Modugno (BA)
  
            </a>
          </div>
        </div>

        {/* Telefono */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-sage/30 bg-sage/10">
            <FaPhone className="text-[0.88rem] text-sage" />
          </div>
          <div>
            <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-navy">
              Telefono
            </p>
            <a
              href="tel:+393286674420"
              className="inline-flex items-center gap-1.5 text-[0.91rem] text-sage underline transition-colors duration-200 hover:text-sage/70"
            >
              328 667 4420
            </a>
          </div>
        </div>

        {/* Orari */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-sage/30 bg-sage/10">
            <FaClock className="text-[0.88rem] text-sage" />
          </div>
          <div>
            <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-navy">
              Orari
            </p>
            <div className="flex flex-col gap-1.5">
              {orari.map(({ giorni, fasce }) => (
                <div key={giorni} className="flex gap-3 text-[0.88rem]">
                  <span className="w-24 flex-shrink-0 font-medium text-navy">
                    {giorni}
                  </span>
                  <span className="text-muted">{fasce.join(' · ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mappa */}
      <div className="h-[300px] overflow-hidden rounded-[5px] border border-sage/20" style={{ isolation: 'isolate' }}>
        <ContactMapWrapper />
      </div>

    </div>
  )
}
