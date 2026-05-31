import React from 'react'
import { WHY_ITEMS } from '../data'
import SectionHeader from './SectionHeader'
import styles from './WhyUs.module.css'

const WhyUs: React.FC = () => (
  <section id="why" className={styles.section}>
    <SectionHeader
      tag="Why Nomad Kaze"
      title={`We Live\nThese Roads`}
    />
    <div className={styles.grid}>
      {WHY_ITEMS.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.icon} aria-hidden="true">{item.icon}</div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.body}>{item.body}</p>
        </div>
      ))}
    </div>
  </section>
)

export default WhyUs
