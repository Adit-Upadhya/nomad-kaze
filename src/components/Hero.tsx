import React from 'react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      {/* SVG Mountain Background */}
      <svg
        className={styles.bgSvg}
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="900" height="600" fill="#0d1a0f" />
        {/* Stars */}
        {[
          [120, 60, 1, 0.4], [280, 30, 1.2, 0.3], [450, 50, 0.8, 0.5],
          [620, 25, 1, 0.3], [780, 70, 1.3, 0.4], [60, 110, 0.7, 0.3],
          [830, 40, 0.9, 0.35], [180, 85, 0.8, 0.25], [720, 55, 1.1, 0.3],
        ].map(([cx, cy, r, op], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#e8d5b0" opacity={op} />
        ))}
        {/* Far mountain range */}
        <polygon
          points="0,350 140,100 260,200 360,80 480,180 580,60 700,170 820,90 900,140 900,350"
          fill="#14271a"
          opacity="0.9"
        />
        {/* Snow caps */}
        <polygon points="340,80 360,80 380,120 320,130" fill="#e8d5b0" opacity="0.15" />
        <polygon points="560,60 580,60 600,100 540,105" fill="#e8d5b0" opacity="0.12" />
        {/* Mid range */}
        <polygon
          points="0,420 80,220 180,310 300,170 400,280 520,150 640,260 760,190 860,250 900,220 900,420"
          fill="#1a3321"
          opacity="0.95"
        />
        {/* Foreground dark ridge */}
        <polygon
          points="0,600 0,380 100,290 220,360 340,270 460,340 560,250 680,330 800,270 900,310 900,600"
          fill="#0f1a11"
        />
        {/* Dirt road perspective */}
        <polygon
          points="360,600 540,600 660,420 560,400 400,400"
          fill="#1a1510"
          opacity="0.6"
        />
        <line x1="450" y1="600" x2="510" y2="400" stroke="#c4580a" strokeWidth="1" opacity="0.25" />
        {/* Horizon glow */}
        <ellipse cx="450" cy="230" rx="300" ry="60" fill="#c4580a" opacity="0.04" />
      </svg>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          Raw Offroad · Authentic Nepal · Deep Wilderness
        </p>

        <h1 className={styles.headline}>
          Ride Where<br />
          <span className={styles.accent}>Roads End</span>
        </h1>

        <p className={styles.tagline}>
          Pokhara-based offroad motorcycle expeditions into the forbidden
          valleys of Mustang and beyond.
        </p>

        <div className={styles.routeBar}>
          {['Pokhara', 'Baglung', 'Mustang'].map((stop, i) => (
            <React.Fragment key={stop}>
              <span className={styles.routeDot} />
              <span className={styles.routeStop}>{stop}</span>
              {i < 2 && <span className={styles.routeLine} />}
            </React.Fragment>
          ))}
          <span className={styles.routeLine} />
          <span className={`${styles.routeDot} ${styles.dotOutline}`} />
          <span className={styles.routeAlt}>5,400m</span>
        </div>

        <div className={styles.btnRow}>
          <button className={styles.btnFlame} onClick={() => scrollTo('#tours')}>
            Explore Expeditions
          </button>
          <button className={styles.btnWire} onClick={() => scrollTo('#route')}>
            Our Routes
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
