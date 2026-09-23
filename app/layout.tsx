import type { Metadata, Viewport } from 'next'
import { addressLine, site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Custom Upholstery in Tampa, FL`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | Custom Upholstery in Tampa, FL`,
    description: site.description,
    url: '/',
    locale: 'en_US',
    images: [{ url: '/gallery/work-19.jpeg', width: 1200, height: 1600, alt: 'Custom diamond-stitched car seats by JLR Upholstery' }],
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = { themeColor: '#7a5338' }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/gallery/work-19.jpeg`,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: 'Tampa Bay, FL',
  sameAs: Object.values(site.social),
  hasMap: `https://maps.google.com/?q=${encodeURIComponent(addressLine)}`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  )
}
