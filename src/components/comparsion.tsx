import { useState } from 'react'
import { m, type Variants } from 'motion/react'
import styles from './comparsion.module.scss'
import HomeIcon from './HomeIcon'
import HeaderRow from './HeaderRow'
import { EASE_OUT, revealOnScroll, staggerVariants } from './motionPresets'

const ROWS = [
  {
    before: '“Request a quote,” then wait days for callbacks',
    after: 'Prices are shown upfront. Compare them in one place.',
  },
  {
    before: 'Your number is passed to multiple companies',
    after: 'Your contact info is never shared without your OK.',
  },
  {
    before: 'High-pressure sales calls',
    after: 'Message pros in-app, on your schedule.',
  },
  {
    before: 'No idea who’s actually showing up',
    after: 'Verified pros, rated on real, completed jobs.',
  },
  {
    before: '“Are they still coming?”',
    after: 'Live status, from booked to done.',
  },
]

// A table row sliding in a little.
const rowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

// The myHomeBase card rises in just after "the usual way" rows start,
// then fills its own rows one by one.
const afterColumnVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: EASE_OUT,
      delayChildren: 0.45,
      staggerChildren: 0.07,
    },
  },
}

export default function Comparsion() {
  // Hovering a row highlights its pair in the other column (desktop).
  const [activeRow, setActiveRow] = useState<number | null>(null)

  const rowHandlers = (i: number) => ({
    onMouseEnter: () => setActiveRow(i),
    onMouseLeave: () => setActiveRow(null),
  })
  const activeClass = (i: number) => (activeRow === i ? styles.rowActive : '')

  return (
    <main className={styles.comparsionMain}>
      <HeaderRow
        labelNumber="(02)"
        labelText="Why MyHomeBase"
        title="Getting a quote shouldn’t cost you your peace and quiet."
        description="Most quote sites sell your request to as many companies as they can. We built the opposite."
      />
      <div className={styles.comparisonTable}>
        <m.div
          className={styles.columnBefore}
          variants={staggerVariants(0.07)}
          {...revealOnScroll}
        >
          <m.div className={styles.columnTopFrame} variants={rowVariants}>
            <span className={styles.columnTopText}>The Usual Way</span>
          </m.div>
          {ROWS.map((row, i) => (
            <m.div
              key={row.before}
              className={`${styles.columnFrame} ${activeClass(i)}`}
              variants={rowVariants}
              {...rowHandlers(i)}
            >
              <span className={styles.columnFrameNumber}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={styles.columnFrameText}>{row.before}</span>
            </m.div>
          ))}
        </m.div>
        <m.div
          className={styles.columnAfter}
          variants={afterColumnVariants}
          {...revealOnScroll}
        >
          <div className={styles.columnTopAfterFrame}>
            <div className={styles.homeIconWrapper}>
              <HomeIcon />
            </div>
            <span className={styles.nameBrand}>
              <span className={styles.nameBrandHighlight}>my</span>HomeBase
            </span>
          </div>
          {ROWS.map((row, i) => (
            <m.div
              key={row.after}
              className={`${styles.columnAfterFrame} ${activeClass(i)}`}
              variants={rowVariants}
              {...rowHandlers(i)}
            >
              <span className={styles.columnFrameText}>{row.after}</span>
            </m.div>
          ))}
        </m.div>
      </div>
    </main>
  )
}
