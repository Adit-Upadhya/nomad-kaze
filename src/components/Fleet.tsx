import React from 'react'
import { BIKES } from '../data'
import SectionHeader from './SectionHeader'
import styles from './Fleet.module.css'

const Fleet: React.FC = () => (
  <section id="fleet" className={styles.section}>
    <SectionHeader
      tag="The Fleet"
      title={`Built for\nNepal`}
      body="Light enough for singletrack, tough enough for 5,000m. We don't run bikes that break on hard terrain."
    />
    <div className={styles.grid}>
      {BIKES.map((bike) => (
        <div key={bike.id} className={styles.card}>
          <div className={styles.icon} aria-hidden="true">{bike.icon}</div>
          <h3 className={styles.name}>{bike.name}</h3>
          <p className={styles.type}>{bike.type}</p>
          <p className={styles.spec}>{bike.spec}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Fleet
