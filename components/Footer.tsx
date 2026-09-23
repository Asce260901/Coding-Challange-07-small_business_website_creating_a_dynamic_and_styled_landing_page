import { FaEnvelope, FaFacebook, FaInstagram, FaLocationDot, FaMobileScreen, FaTiktok } from 'react-icons/fa6'
import { addressLine, mapsUrl, site } from '@/lib/site'

export function Footer() {
  return (
    <footer>
      <h2>Contact Information</h2>
      <ul className="contactinfo">
        <li>
          <FaEnvelope aria-hidden />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
        <li>
          <FaMobileScreen aria-hidden />
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </li>
        <li>
          <FaLocationDot aria-hidden />
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            {addressLine}
          </a>
        </li>
      </ul>

      <h2>Follow us on social media:</h2>
      <ul className="socialmedia">
        <li>
          <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook aria-hidden /> Facebook
          </a>
        </li>
        <li>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram aria-hidden /> Instagram
          </a>
        </li>
        <li>
          <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer">
            <FaTiktok aria-hidden /> TikTok
          </a>
        </li>
      </ul>

      <p>
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  )
}
