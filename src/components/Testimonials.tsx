import React from 'react'
import { TESTIMONIALS } from '../data'
import SectionHeader from './SectionHeader'
import styles from './Testimonials.module.css'

const Testimonials: React.FC = () => (
  <section className={styles.section}>
    <SectionHeader
      tag="Rider Voices"
      title={`From the\nTrail`}
      light
    />
    <div className={styles.grid}>
      {TESTIMONIALS.map((t) => (
        <blockquote key={t.id} className={styles.card}>
          <div className={styles.stars} aria-label="5 stars">★★★★★</div>
          <p className={styles.quote}>"{t.quote}"</p>
          <footer>
            <cite className={styles.author}>{t.author}</cite>
            <p className={styles.origin}>
              {t.origin} · {t.tour}
            </p>
          </footer>
        </blockquote>
      ))}
    </div>
  </section>
)

export default Testimonials
