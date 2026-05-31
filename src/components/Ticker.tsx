import React from 'react'
import { TICKER_ITEMS } from '../data'
import styles from './Ticker.module.css'

const Ticker: React.FC = () => {
  // Duplicate items so the seamless loop works
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.inner}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker
