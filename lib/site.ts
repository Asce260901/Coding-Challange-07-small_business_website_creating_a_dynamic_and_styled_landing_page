export const site = {
  name: 'JLR Upholstery',
  tagline: "Tampa Bay's Trusted Upholsterer",
  description:
    'Custom upholstery in Tampa, FL: car interiors, boat seating, furniture restoration and custom cushions. Free estimates and fast response.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'jlrupholstery@gmail.com',
  phone: '+13054076857',
  phoneDisplay: '+1 (305) 407-6857',
  address: {
    street: '6915 N Clearview Ave',
    city: 'Tampa',
    region: 'FL',
    postalCode: '33614',
    country: 'US',
  },
  social: {
    facebook: 'https://www.facebook.com/share/1AtkpNdvSB/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/jlr_tapiceria/',
    tiktok: 'https://www.tiktok.com/@jlrodriguez90',
  },
} as const

export const addressLine = `${site.address.street} ${site.address.city} ${site.address.region} ${site.address.postalCode}`
export const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(addressLine)}`

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#previouswork', label: 'Previous Work' },
  { href: '#contactus', label: 'Contact Us' },
] as const

// Service photos come from the shop's own work (see galleryImages) instead of
// hotlinked third-party images.
export const services = [
  {
    title: 'Furniture Upholstery',
    image: '/gallery/work-09.jpeg',
    alt: 'Two-tone brown and cream leather loveseat with stitched monogram',
    text: 'We restore sofas, chairs, dining seats, and more with durable materials and professional finishing.',
  },
  {
    title: 'Custom Cushions',
    image: '/gallery/work-25.jpeg',
    alt: 'Custom white and black bench seat cushions',
    text: 'Need custom cushions for your home, patio, or business? We create comfortable and stylish solutions tailored to your need.',
  },
  {
    title: 'Repairs & Restoration',
    image: '/gallery/work-14.jpeg',
    alt: 'Restored grey leather truck seat with embroidered logo',
    text: 'From worn fabric to damaged padding, we help bring your favorite pieces back to life.',
  },
  {
    title: 'Car Upholstery',
    image: '/gallery/work-19.jpeg',
    alt: 'Red and grey diamond-stitched custom racing seats',
    text: 'We specialize in restoring and customizing car interiors, including seats, door panels, and headliners.',
  },
  {
    title: 'Boat Upholstery',
    image: '/gallery/work-11.jpeg',
    alt: 'Tan and white upholstered helm seats and lounge on a boat',
    text: 'We specialize in restoring and customizing boat interiors, including seats, consoles, and headliners.',
  },
] as const

/** Gallery photos work-00 … work-25. Alt text is short; edit per photo as needed. */
export const galleryImages = Array.from({ length: 26 }, (_, i) => ({
  src: `/gallery/work-${String(i).padStart(2, '0')}.jpeg`,
  alt: `JLR Upholstery finished project ${i + 1}`,
}))
