'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { navLinks, site } from '@/lib/site'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav aria-label="Main">
        <ul className={`navlinks${open ? ' open' : ''}`} id="navlinks">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="logo">
        <Image src="/logo-white.png" alt="" width={80} height={80} priority className="logo-mark" />
        <h1>{site.name}</h1>
        <button
          type="button"
          className="hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}
