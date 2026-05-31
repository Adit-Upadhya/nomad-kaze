import React from 'react'
import styles from './CTA.module.css'

const CTA: React.FC = () => {
  const scrollToBook = () =>
    document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        The Road<br />
        Doesn&apos;t Wait
      </h2>
      <p className={styles.sub}>
        Mustang season opens March. Limited spots per group.
      </p>
      <button className={styles.btn} onClick={scrollToBook}>
        Book Your Expedition
      </button>
    </section>
  )
}

export default CTA
