'use server'

import { site } from '@/lib/site'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
  fieldErrors?: Partial<Record<'name' | 'phone' | 'message', string>>
  values?: { name: string; phone: string; message: string }
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get('website') ?? '').trim() !== '') {
    return { status: 'success', message: 'Thanks! We will be in touch shortly.' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const phoneRaw = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const values = { name, phone: phoneRaw, message }

  // Accept "(305) 407-6857", "305-407-6857", "+1 305 407 6857" …
  let digits = phoneRaw.replace(/\D/g, '')
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1)

  const fieldErrors: NonNullable<ContactState['fieldErrors']> = {}
  if (name.length < 2 || name.length > 100) fieldErrors.name = 'Please enter your name.'
  if (!/^\d{10}$/.test(digits)) fieldErrors.phone = 'Please enter a valid 10-digit phone number.'
  if (message.length < 5 || message.length > 3000) fieldErrors.message = 'Please tell us a bit about your project.'
  if (Object.keys(fieldErrors).length) {
    return { status: 'error', message: 'Please fix the highlighted fields.', fieldErrors, values }
  }

  const prettyPhone = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[contact] RESEND_API_KEY not set; would have sent:', { name, phone: prettyPhone, message })
      return { status: 'success', message: 'Thanks! We will be in touch shortly. (dev mode: not emailed)' }
    }
    console.error('[contact] RESEND_API_KEY is not configured')
    return {
      status: 'error',
      message: `Sorry, we couldn't send your message. Please call or text us at ${site.phoneDisplay}.`,
      values,
    }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? `${site.name} Website <onboarding@resend.dev>`,
        to: [process.env.CONTACT_TO_EMAIL ?? site.email],
        subject: `Free estimate request from ${name}`,
        text: `${message}\n\nFrom: ${name}\nPhone: ${prettyPhone}`,
        html: `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p><p><strong>From:</strong> ${escapeHtml(name)}<br><strong>Phone:</strong> <a href="tel:+1${digits}">${prettyPhone}</a></p>`,
      }),
    })
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`)
  } catch (err) {
    console.error('[contact] send failed', err)
    return {
      status: 'error',
      message: `Sorry, we couldn't send your message. Please call or text us at ${site.phoneDisplay}.`,
      values,
    }
  }

  return { status: 'success', message: 'Thanks! We received your request and will get back to you shortly.' }
}
