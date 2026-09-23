import Image from 'next/image'
import { services } from '@/lib/site'

export function Services() {
  return (
    <section id="services" className="servicessection" aria-label="Services">
      {services.map((s) => (
        <article className="service" key={s.title}>
          <div className="service-img">
            <Image src={s.image} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 300px" />
          </div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </article>
      ))}
    </section>
  )
}
