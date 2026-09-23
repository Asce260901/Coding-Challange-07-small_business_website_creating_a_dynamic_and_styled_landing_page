# JLR Upholstery

Marketing site for JLR Upholstery (Tampa, FL), built with Next.js (App Router) and TypeScript.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where things live

- `lib/site.ts`: business details, nav links, services and gallery photos. Most content edits happen here.
- `public/gallery/`: project photos (`work-00.jpeg` …). Next.js resizes and serves them as AVIF/WebP.
- `app/actions.ts`: server action behind the contact form (validation, spam honeypot, email via Resend).
- `components/`: page sections.

## Going live

1. Copy `.env.example` to `.env.local` and fill it in. Set the same variables on your host (Vercel works with zero config).
2. Create a [Resend](https://resend.com) account, verify a sending domain, and set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL`.
3. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
