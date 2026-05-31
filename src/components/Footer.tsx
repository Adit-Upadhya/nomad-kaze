import React from 'react'
import { NAV_LINKS } from '../data'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span className={styles.logo}>NOMAD KAZE</span>
        <span className={styles.tagline}>
          Pokhara, Nepal · nomadkaze.com
        </span>
      </div>

      <nav className={styles.links} aria-label="Footer navigation">
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            className={styles.link}
            onClick={() =>
              document
                .querySelector(link.href)
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {link.label}
          </button>
        ))}
      </nav>

      <p className={styles.copy}>
        © {year} Nomad Kaze Pvt. Ltd. · All rights reserved
      </p>
    </footer>
  )
}

export default Footer
