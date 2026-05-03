import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactBody {
  nome: string
  cognome: string
  email: string
  telefono: string
  motivo: string
  messaggio?: string
}

function validate(body: ContactBody): string | null {
  if (!body.nome?.trim()) return 'Nome mancante'
  if (!body.cognome?.trim()) return 'Cognome mancante'
  if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    return 'Email non valida'
  if (!body.telefono?.trim()) return 'Telefono mancante'
  if (!body.motivo?.trim()) return 'Motivo mancante'
  return null
}

export async function POST(request: Request) {
  let body: ContactBody

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Richiesta non valida' }, { status: 400 })
  }

  const validationError = validate(body)
  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 })
  }

  const to = process.env.CONTACT_EMAIL_TO
  if (!to) {
    console.error('CONTACT_EMAIL_TO non configurata')
    return Response.json({ error: 'Configurazione server mancante' }, { status: 500 })
  }

  const { error } = await resend.emails.send({
    from: 'Sito Francesco Baldi <onboarding@resend.dev>',
    to,
    replyTo: body.email,
    subject: `Nuova richiesta di visita — ${body.nome} ${body.cognome}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #3d4455;">
        <div style="background: #15203D; padding: 24px 32px; border-radius: 6px 6px 0 0;">
        
          <h1 style="margin: 8px 0 0; font-size: 1.25rem; color: #F5F5F6; font-weight: 600;">
            Nuova richiesta di visita
          </h1>
        </div>

        <div style="background: #ffffff; padding: 32px; border: 1px solid #e8e8e8; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 38%;">
                <span style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #7a8196;">Nome</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.93rem;">
                ${body.nome} ${body.cognome}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #7a8196;">Email</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.93rem;">
                <a href="mailto:${body.email}" style="color: #6B9E82;">${body.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #7a8196;">Telefono</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.93rem;">
                <a href="tel:${body.telefono.replace(/\s/g, '')}" style="color: #6B9E82;">${body.telefono}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #7a8196;">Motivo</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.93rem;">
                ${body.motivo}
              </td>
            </tr>
            ${body.messaggio?.trim() ? `
            <tr>
              <td style="padding: 10px 0;" valign="top">
                <span style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #7a8196;">Messaggio</span>
              </td>
              <td style="padding: 10px 0; font-size: 0.93rem; line-height: 1.7;">
                ${body.messaggio.trim().replace(/\n/g, '<br/>')}
              </td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 28px; padding: 16px 20px; background: rgba(107,158,130,0.08); border-left: 3px solid #6B9E82; border-radius: 0 4px 4px 0;">
            <p style="margin: 0; font-size: 0.84rem; color: #3d4455;">
              Rispondi a questa email per contattare direttamente il paziente.
            </p>
          </div>
        </div>

        <div style="padding: 16px 32px; background: #f8f8f8; border: 1px solid #e8e8e8; border-top: none; border-radius: 0 0 6px 6px;">
          <p style="margin: 0; font-size: 0.74rem; color: #7a8196;">
            Inviato tramite il modulo di contatto su francescobaldosteopata.it
          </p>
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('Errore Resend:', error)
    return Response.json({ error: "Errore nell'invio dell'email" }, { status: 500 })
  }

  return Response.json({ ok: true })
}
