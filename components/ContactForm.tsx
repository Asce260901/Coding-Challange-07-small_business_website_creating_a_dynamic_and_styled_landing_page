'use client'

import { useActionState } from 'react'
import { sendContact, type ContactState } from '@/app/actions'

const initial: ContactState = { status: 'idle', message: '' }

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial)
  const errs = state.fieldErrors ?? {}

  if (state.status === 'success') {
    return (
      <p className="form-status success" role="status">
        {state.message}
      </p>
    )
  }

  return (
    <form action={action} noValidate>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        autoComplete="name"
        placeholder="Your Name"
        defaultValue={state.values?.name}
        aria-invalid={!!errs.name}
        aria-describedby={errs.name ? 'name-err' : undefined}
      />
      {errs.name && <p className="field-error" id="name-err">{errs.name}</p>}

      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        inputMode="tel"
        autoComplete="tel"
        placeholder="e.g. 3051234567"
        defaultValue={state.values?.phone}
        aria-invalid={!!errs.phone}
        aria-describedby={errs.phone ? 'phone-err' : undefined}
      />
      {errs.phone && <p className="field-error" id="phone-err">{errs.phone}</p>}

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        placeholder="Tell us about your project"
        defaultValue={state.values?.message}
        aria-invalid={!!errs.message}
        aria-describedby={errs.message ? 'message-err' : undefined}
      />
      {errs.message && <p className="field-error" id="message-err">{errs.message}</p>}

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={pending}>
        {pending ? 'Sending…' : 'Submit'}
      </button>

      {state.status === 'error' && (
        <p className="form-status error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  )
}
