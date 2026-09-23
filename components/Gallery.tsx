'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'
import { galleryImages } from '@/lib/site'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const total = galleryImages.length

  const step = useCallback((d: number) => setActive((i) => (i === null ? i : (i + d + total) % total)), [total])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active !== null && !dialog.open) dialog.showModal()
    if (active === null && dialog.open) dialog.close()
  }, [active])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, step])

  const current = active === null ? null : galleryImages[active]

  return (
    <section id="previouswork" className="imagespage">
      <h2>Previous Work</h2>
      <ul className="gallery-grid">
        {galleryImages.map((img, i) => (
          <li key={img.src}>
            <button type="button" onClick={() => setActive(i)} aria-label={`View photo ${i + 1} of ${total}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 45vw, 240px"
                loading={i < 6 ? 'eager' : 'lazy'}
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null)
        }}
      >
        {current && (
          <div className="lightbox-stage">
            <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" priority />
          </div>
        )}
        <button type="button" className="lb-btn lb-close" aria-label="Close" onClick={() => setActive(null)}>
          <FaXmark />
        </button>
        <button type="button" className="lb-btn lb-prev" aria-label="Previous photo" onClick={() => step(-1)}>
          <FaChevronLeft />
        </button>
        <button type="button" className="lb-btn lb-next" aria-label="Next photo" onClick={() => step(1)}>
          <FaChevronRight />
        </button>
      </dialog>
    </section>
  )
}
