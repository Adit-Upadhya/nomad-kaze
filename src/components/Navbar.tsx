import React, { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoMain}>NOMAD KAZE</span>
        <span className={styles.logoSub}>Pokhara · Nepal · Est. 2018</span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <button
              className={styles.link}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={styles.bookBtn}
        onClick={() => handleNavClick('#book')}
      >
        Book a Ride
      </button>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
      </button>
    </nav>
  )
}

export default Navbar
