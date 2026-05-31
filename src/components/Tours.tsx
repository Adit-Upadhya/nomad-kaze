import React, { useState } from 'react'
import type { Tour } from '../types'
import { TOURS } from '../data'
import SectionHeader from './SectionHeader'
import styles from './Tours.module.css'

const TourCard: React.FC<{ tour: Tour }> = ({ tour }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={`${styles.card} ${hovered ? styles.cardHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={styles.levelBadge}
        style={{ color: tour.levelColor }}
      >
        {tour.level} · {tour.offroad}
      </div>

      <h3 className={styles.tourName}>
        {tour.name}
        {tour.nameBreak && (
          <>
            <br />
            {tour.nameBreak}
          </>
        )}
      </h3>

      <p className={styles.route}>{tour.route}</p>
      <p className={styles.desc}>{tour.description}</p>

      <div className={styles.pills}>
        {tour.tags.map((tag) => (
          <span key={tag} className={styles.pill}>
            {tag}
          </span>
        ))}
      </div>

      <button
        className={styles.detailBtn}
        onClick={() =>
          document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        Enquire →
      </button>
    </article>
  )
}

const Tours: React.FC = () => (
  <section id="tours" className={styles.section}>
    <SectionHeader
      tag="Expeditions"
      title={`Choose Your\nMission`}
      body="Every route begins in Pokhara. All go deep. None follow the tourist road."
    />
    <div className={styles.grid}>
      {TOURS.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  </section>
)

export default Tours
