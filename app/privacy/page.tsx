import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dott. Francesco Baldi — Osteopata Modugno',
  description:
    'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).',
}

const SECTION = 'mb-8'
const H2 = 'mb-3 font-serif text-[1.15rem] font-semibold text-navy'
const P = 'text-[0.91rem] leading-relaxed text-body'
const UL = 'mt-2 list-disc space-y-1 pl-5 text-[0.91rem] leading-relaxed text-body'

export default function PrivacyPage() {
  return (
    <section className="py-20 pt-30">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {/* Intestazione */}
        <div className="mb-12">
          <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
            Informativa
          </p>
          <h1 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-tight text-navy">
            Privacy Policy
          </h1>
          <div className="mt-3 h-0.5 w-8 bg-sage" />
          <p className="mt-4 text-[0.85rem] text-muted">
            Ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal
            D.Lgs. 101/2018 — ultimo aggiornamento: maggio 2025
          </p>
        </div>

        {/* 1. Titolare */}
        <div className={SECTION}>
          <h2 className={H2}>1. Titolare del trattamento</h2>
          <p className={P}>
            Dott. Francesco Baldi, Osteopata — con studio a Modugno (BA).
            <br />
            Per qualsiasi richiesta relativa al trattamento dei tuoi dati puoi scrivere a:{' '}
            <a
              href="mailto:info@francescobaldiosteopata.it"
              className="text-sage underline-offset-2 hover:underline"
            >
              info@francescobaldiosteopata.it
            </a>
          </p>
        </div>

        {/* 2. Dati raccolti */}
        <div className={SECTION}>
          <h2 className={H2}>2. Dati personali raccolti</h2>
          <p className={P}>
            Attraverso il modulo di contatto presente sul sito raccogliamo i seguenti dati:
          </p>
          <ul className={UL}>
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Motivo della visita (che può costituire un dato relativo alla salute)</li>
            <li>Eventuale messaggio libero</li>
          </ul>
        </div>

        {/* 3. Finalità e base giuridica */}
        <div className={SECTION}>
          <h2 className={H2}>3. Finalità e base giuridica del trattamento</h2>
          <p className={P}>
            I dati vengono trattati esclusivamente per rispondere alla tua richiesta di contatto
            e/o per la gestione della prenotazione di una visita osteopatica.
          </p>
          <p className={`${P} mt-3`}>
            La base giuridica del trattamento è il{' '}
            <strong>consenso esplicito dell&apos;interessato</strong> (art. 6, par. 1, lett. a e
            art. 9, par. 2, lett. a del GDPR), prestato mediante la compilazione e l&apos;invio
            del modulo di contatto.
          </p>
        </div>

        {/* 4. Conservazione */}
        <div className={SECTION}>
          <h2 className={H2}>4. Periodo di conservazione</h2>
          <p className={P}>
            I dati sono conservati per il tempo strettamente necessario a gestire la richiesta e,
            in caso di instaurazione di un rapporto professionale, per il periodo previsto dalla
            normativa applicabile. In assenza di seguito, i dati vengono eliminati entro 12 mesi
            dalla ricezione.
          </p>
        </div>

        {/* 5. Comunicazione */}
        <div className={SECTION}>
          <h2 className={H2}>5. Comunicazione e diffusione</h2>
          <p className={P}>
            I dati non vengono ceduti, venduti o comunicati a terzi per finalità commerciali. Possono
            essere trattati da soggetti che forniscono servizi tecnici al titolare (es. hosting,
            email) in qualità di responsabili del trattamento, previa stipula di appositi accordi.
          </p>
        </div>

        {/* 6. Diritti */}
        <div className={SECTION}>
          <h2 className={H2}>6. I tuoi diritti</h2>
          <p className={P}>
            Ai sensi degli artt. 15–22 del GDPR hai diritto di:
          </p>
          <ul className={UL}>
            <li>Accedere ai tuoi dati personali</li>
            <li>Richiederne la rettifica o la cancellazione</li>
            <li>Opporti al trattamento o chiederne la limitazione</li>
            <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente</li>
            <li>Proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)</li>
          </ul>
          <p className={`${P} mt-3`}>
            Per esercitare i tuoi diritti scrivi a:{' '}
            <a
              href="mailto:info@francescobaldiosteopata.it"
              className="text-sage underline-offset-2 hover:underline"
            >
              info@francescobaldiosteopata.it
            </a>
          </p>
        </div>

        {/* 7. Cookie */}
        <div className={SECTION}>
          <h2 className={H2}>7. Cookie</h2>
          <p className={P}>
            Il sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento
            delle pagine. Non vengono utilizzati cookie di profilazione o di terze parti a fini
            pubblicitari.
          </p>
        </div>

        {/* Nota placeholder */}
        <div className="mt-10 rounded-[5px] border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-[0.82rem] leading-relaxed text-amber-800">
            <strong>Nota:</strong> Questo testo è una bozza strutturata. Il contenuto definitivo
            dovrà essere verificato e validato dal titolare del trattamento, preferibilmente con
            il supporto di un consulente GDPR, prima della pubblicazione.
          </p>
        </div>
      </div>
    </section>
  )
}
