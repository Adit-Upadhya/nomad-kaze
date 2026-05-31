import React from 'react'
import { STATS } from '../data'
import styles from './StatsBar.module.css'

const StatsBar: React.FC = () => (
  <div className={styles.bar}>
    {STATS.map((stat) => (
      <div key={stat.label} className={styles.item}>
        <span className={styles.value}>{stat.value}</span>
        <span className={styles.label}>{stat.label}</span>
      </div>
    ))}
  </div>
)

export default StatsBar
