'use client'

import { useState } from 'react'
import Link from 'next/link'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface Fields {
  nome: string
  cognome: string
  email: string
  telefono: string
  motivo: string
  messaggio: string
  privacy: boolean
}

interface Errors {
  nome?: string
  cognome?: string
  email?: string
  telefono?: string
  motivo?: string
  privacy?: string
}

type Touched = Partial<Record<keyof Errors, boolean>>

const MOTIVI = [
  'Dolore cervicale / collo',
  'Mal di schiena / lombalgia',
  'Cefalea / emicrania',
  'Problemi posturali',
  'Dolore articolare',
  'Recupero post-infortunio',
  'Altro',
]

const EMPTY: Fields = {
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  motivo: '',
  messaggio: '',
  privacy: false,
}

const HAS_DIGIT = /\d/
const HAS_SPECIAL = /[^a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚ\s'\-.]/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

function validateNome(val: string, label: 'nome' | 'cognome'): string | undefined {
  const l = label === 'nome' ? 'Il nome' : 'Il cognome'
  const trimmed = val.trim()
  if (!trimmed) return `${l} è obbligatorio`
  if (HAS_DIGIT.test(trimmed)) return `${l} non può contenere numeri`
  if (HAS_SPECIAL.test(trimmed)) return `${l} non può contenere caratteri speciali`
  if (trimmed.length < 2) return `${l} deve avere almeno 2 caratteri`
  return undefined
}

function validateEmail(val: string): string | undefined {
  const trimmed = val.trim()
  if (!trimmed) return "L'email è obbligatoria"
  if (!trimmed.includes('@')) return "L'indirizzo email deve contenere @"
  const parts = trimmed.split('@')
  if (!parts[1] || !parts[1].includes('.')) return 'Inserisci un dominio valido (es. gmail.com)'
  if (!EMAIL_RE.test(trimmed)) return 'Inserisci un indirizzo email valido (es. nome@email.it)'
  return undefined
}

function validateTelefono(val: string): string | undefined {
  const trimmed = val.trim()
  if (!trimmed) return 'Il numero di telefono è obbligatorio'
  const digits = trimmed.replace(/[\s\-]/g, '')
  if (!/^\d+$/.test(digits)) return 'Inserisci solo cifre (es. 328 1234567)'
  if (digits.length < 9) return 'Il numero deve avere almeno 9 cifre'
  if (digits.length > 10) return 'Il numero non può superare le 10 cifre'
  return undefined
}

function validate(f: Fields): Errors {
  const e: Errors = {}
  const nome = validateNome(f.nome, 'nome')
  if (nome) e.nome = nome
  const cognome = validateNome(f.cognome, 'cognome')
  if (cognome) e.cognome = cognome
  const email = validateEmail(f.email)
  if (email) e.email = email
  const telefono = validateTelefono(f.telefono)
  if (telefono) e.telefono = telefono
  if (!f.motivo) e.motivo = 'Seleziona il motivo della visita'
  if (!f.privacy) e.privacy = 'Devi accettare la Privacy Policy per inviare il modulo'
  return e
}

function validateField(name: keyof Errors, f: Fields): string | undefined {
  if (name === 'nome') return validateNome(f.nome, 'nome')
  if (name === 'cognome') return validateNome(f.cognome, 'cognome')
  if (name === 'email') return validateEmail(f.email)
  if (name === 'telefono') return validateTelefono(f.telefono)
  if (name === 'motivo') return f.motivo ? undefined : 'Seleziona il motivo della visita'
  if (name === 'privacy') return f.privacy ? undefined : 'Devi accettare la Privacy Policy per inviare il modulo'
  return undefined
}

const labelCls =
  'block text-[0.73rem] font-semibold uppercase tracking-[0.1em] text-navy mb-1.5'
const inputCls =
  'w-full rounded-[5px] border border-navy/15 bg-white px-3.5 py-2.5 text-[0.91rem] text-body outline-none transition-all duration-200 focus:border-sage focus:ring-2 focus:ring-sage/15 placeholder:text-muted/50'
const inputErrCls =
  'w-full rounded-[5px] border border-red-400 bg-white px-3.5 py-2.5 text-[0.91rem] text-body outline-none transition-all duration-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 placeholder:text-muted/50'
const errMsgCls = 'mt-1.5 text-[0.77rem] text-red-500'

export default function ContactFormSection() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Touched>({})
  const [status, setStatus] = useState<FormState>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    let newValue: string | boolean = type === 'checkbox' ? checked : value

    if (name === 'telefono' && typeof newValue === 'string') {
      newValue = newValue.replace(/[^\d\s\-]/g, '')
    }

    const updated = { ...fields, [name]: newValue }
    setFields(updated)

    if (touched[name as keyof Errors]) {
      const err = validateField(name as keyof Errors, updated)
      setErrors((prev) => ({ ...prev, [name]: err }))
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name } = e.target
    const fieldName = name as keyof Errors
    setTouched((prev) => ({ ...prev, [fieldName]: true }))
    const err = validateField(fieldName, fields)
    setErrors((prev) => ({ ...prev, [fieldName]: err }))
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setTouched({ nome: true, cognome: true, email: true, telefono: true, motivo: true, privacy: true })
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[5px] border border-sage/25 bg-white px-8 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/10">
          <svg
            className="h-7 w-7 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="mb-2 font-serif text-[1.4rem] font-semibold text-navy">
            Messaggio inviato
          </h3>
          <p className="text-[0.91rem] leading-relaxed text-muted">
            Grazie per averci contattato. Risponderemo entro 24 ore nei giorni
            lavorativi.
          </p>
        </div>
        <button
          onClick={() => { setFields(EMPTY); setErrors({}); setTouched({}); setStatus('idle') }}
          className="mt-2 text-[0.82rem] font-medium text-sage underline-offset-2 hover:underline"
        >
          Invia un altro messaggio
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Titolo */}
      <div>
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
          Scrivici
        </p>
        <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold leading-tight text-navy">
          Prenota una visita
        </h2>
        <div className="mt-3 h-0.5 w-8 bg-sage" />
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Nome + Cognome */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="nome" className={labelCls}>
              Nome <span className="text-sage">*</span>
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              autoComplete="given-name"
              value={fields.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Francesco"
              className={errors.nome ? inputErrCls : inputCls}
            />
            {errors.nome && <p className={errMsgCls}>{errors.nome}</p>}
          </div>
          <div>
            <label htmlFor="cognome" className={labelCls}>
              Cognome <span className="text-sage">*</span>
            </label>
            <input
              id="cognome"
              name="cognome"
              type="text"
              autoComplete="family-name"
              value={fields.cognome}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Baldi"
              className={errors.cognome ? inputErrCls : inputCls}
            />
            {errors.cognome && <p className={errMsgCls}>{errors.cognome}</p>}
          </div>
        </div>

        {/* Email + Telefono */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelCls}>
              Email <span className="text-sage">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="nome@email.it"
              className={errors.email ? inputErrCls : inputCls}
            />
            {errors.email && <p className={errMsgCls}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="telefono" className={labelCls}>
              Telefono <span className="text-sage">*</span>
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              autoComplete="tel"
              value={fields.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="328 000 0000"
              className={errors.telefono ? inputErrCls : inputCls}
            />
            {errors.telefono && <p className={errMsgCls}>{errors.telefono}</p>}
          </div>
        </div>

        {/* Motivo */}
        <div>
          <label htmlFor="motivo" className={labelCls}>
            Motivo della visita <span className="text-sage">*</span>
          </label>
          <select
            id="motivo"
            name="motivo"
            value={fields.motivo}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.motivo ? inputErrCls : inputCls}
          >
            <option value="">Seleziona un motivo…</option>
            {MOTIVI.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          {errors.motivo && <p className={errMsgCls}>{errors.motivo}</p>}
        </div>

        {/* Messaggio */}
        <div>
          <label htmlFor="messaggio" className={labelCls}>
            Messaggio{' '}
            <span className="font-normal normal-case tracking-normal text-muted">
              (opzionale)
            </span>
          </label>
          <textarea
            id="messaggio"
            name="messaggio"
            rows={4}
            value={fields.messaggio}
            onChange={handleChange}
            placeholder="Descrivi brevemente il tuo problema o le domande che hai…"
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* Privacy */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacy"
              checked={fields.privacy}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy/30 accent-sage"
            />
            <span className="text-[0.83rem] leading-relaxed text-body">
              Ho letto e accetto la{' '}
              <Link
                href="/privacy"
                target="_blank"
                className="text-sage underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>{' '}
              in conformità al GDPR (Regolamento UE 2016/679){' '}
              <span className="text-sage">*</span>
            </span>
          </label>
          {errors.privacy && <p className={errMsgCls}>{errors.privacy}</p>}
        </div>

        {/* Errore generico */}
        {status === 'error' && (
          <p className="rounded-[5px] border border-red-200 bg-red-50 px-4 py-3 text-[0.87rem] text-red-600">
            Si è verificato un errore. Riprova o contattaci direttamente per
            telefono.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex items-center justify-center gap-2 rounded-[5px] bg-sage px-8 py-3 text-[0.83rem] font-medium tracking-[0.06em] text-off-white transition-all duration-300 hover:bg-sage/85 hover:-translate-y-px hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Invio in corso…
            </>
          ) : (
            'Invia richiesta'
          )}
        </button>

        <div className="rounded-[5px] border border-sage/25 border-l-[3px] border-l-sage bg-sage/5 px-5 py-4">
          <p className="text-[0.88rem] leading-relaxed text-body">
            <strong className="text-navy">Prenota per telefono o tramite il modulo.</strong>{' '}
            Rispondo entro 24 ore nei giorni lavorativi.
          </p>
        </div>

        <p className="text-[0.76rem] text-muted">
          I campi contrassegnati con <span className="text-sage">*</span> sono
          obbligatori.
        </p>
      </form>
    </div>
  )
}
