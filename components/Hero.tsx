import { HeroIllustration } from './HeroIllustration'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-svg-wrap">
        <HeroIllustration />
      </div>

      <div className="cta-card">
        <p className="cta-label">{site.tagline}</p>
        <h2>
          Expert Upholstery.
          <br />
          Timeless Craftsmanship.
        </h2>
        <p className="maincta">Cars · Boats · Furniture · Custom Cushions</p>
        <a className="ctabton" href="#contactus">
          Get a Free Quote →
        </a>
        <p className="reassurance">No commitment · Free estimate · Fast response</p>
      </div>
    </section>
  )
}
