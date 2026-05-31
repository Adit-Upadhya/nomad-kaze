import React from 'react'
import styles from './SectionHeader.module.css'

interface Props {
  tag: string
  title: string
  body?: string
  light?: boolean
}

const SectionHeader: React.FC<Props> = ({ tag, title, body, light }) => (
  <div className={styles.wrap}>
    <p className={styles.tag}>{tag}</p>
    <h2
      className={`${styles.title} ${light ? styles.light : ''}`}
      style={{ whiteSpace: 'pre-line' }}
    >
      {title}
    </h2>
    {body && <p className={styles.body}>{body}</p>}
  </div>
)

export default SectionHeader
