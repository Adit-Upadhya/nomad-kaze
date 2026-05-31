import React from 'react'
import { ROUTE_STOPS } from '../data'
import SectionHeader from './SectionHeader'
import styles from './RouteMap.module.css'

const RouteMap: React.FC = () => (
  <section id="route" className={styles.section}>
    <SectionHeader
      tag="The Signature Route"
      title={`Pokhara →\nMustang`}
      body="Every kilometer earned. 340km of raw Nepal between your wheels and the roof of the world."
    />

    <div className={styles.mapWrap}>
      <div className={styles.stopsRow}>
        {ROUTE_STOPS.map((stop, index) => (
          <div key={stop.id} className={styles.stop}>
            {/* Connector line before stop (except first) */}
            {index > 0 && <div className={styles.connector} />}

            <div
              className={`${styles.dot} ${
                stop.isOrigin ? styles.dotOrigin : ''
              } ${stop.isDestination ? styles.dotDest : ''}`}
            >
              <span className={styles.dotNum}>{stop.id}</span>
            </div>

            <div className={styles.stopName}>{stop.name}</div>
            <div
              className={`${styles.stopElev} ${
                stop.isDestination ? styles.elevHighlight : ''
              }`}
            >
              {stop.elevation}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.meta}>
        {[
          ['Total distance', '~340km'],
          ['Offroad', '>65%'],
          ['Permit zone', 'Kagbeni onwards'],
          ['Best season', 'Mar–Nov'],
        ].map(([label, value]) => (
          <div key={label} className={styles.metaItem}>
            <span className={styles.metaLabel}>{label}:</span>
            <span className={styles.metaValue}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default RouteMap
