import { Fragment, useRef } from 'react'
import {
  m,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from 'motion/react'
import styles from './statement.module.scss'
import {
  EASE_OUT,
  revealOnScroll,
  riseVariants,
  staggerVariants,
} from './motionPresets'

const LEAD =
  'Every quote site works the same way: you ask for a price, and your phone starts ringing.'
const FOLLOW =
  'myHomeBase flips it. You see real prices first, your number stays private, and pros can only reach you in-app — after you book.'

// Each word, and whether it belongs to the gray second sentence.
const WORDS = [
  ...LEAD.split(' ').map((text) => ({ text, gray: false })),
  ...FOLLOW.split(' ').map((text) => ({ text, gray: true })),
]

const STATS = [
  { value: '$0', label: 'To join early access', accent: true },
  { value: '0', label: 'Sales calls, ever' },
  { value: '1', label: 'Thread per job' },
  { value: '5', label: 'Live status steps' },
]

// The divider above the stats draws in from the left.
const ruleVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE_OUT } },
}

// One word whose brightness follows the scroll position.
function ScrollWord({
  text,
  className,
  progress,
  range,
}: {
  text: string
  className?: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <m.span className={className} style={{ opacity }}>
      {text}
    </m.span>
  )
}

export default function Statement() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const reduceMotion = useReducedMotion()

  // 0 when the heading's top reaches 85% down the viewport,
  // 1 when its bottom reaches 45% — so the words fill in as you read.
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ['start 0.85', 'end 0.45'],
  })

  return (
    <main className={styles.statementMain}>
      <div className={styles.statement}>
        <m.div
          className={styles.labelcol}
          variants={riseVariants}
          {...revealOnScroll}
        >
          <label>
            <span className={styles.labelNumber}>(01)</span>
            <span className={styles.labelText}>The Idea</span>
          </label>
        </m.div>
        <div className={styles.bodycol}>
          <h2 className={styles.bodyHeading} ref={headingRef}>
            {reduceMotion ? (
              <>
                {LEAD}{' '}
                <span className={styles.grayText}>{FOLLOW}</span>
              </>
            ) : (
              WORDS.map((word, i) => (
                <Fragment key={i}>
                  <ScrollWord
                    text={word.text}
                    className={word.gray ? styles.grayText : undefined}
                    progress={scrollYProgress}
                    range={[i / WORDS.length, (i + 1) / WORDS.length]}
                  />
                  {i < WORDS.length - 1 && ' '}
                </Fragment>
              ))
            )}
          </h2>
          <m.div
            className={styles.stats}
            variants={staggerVariants(0.08, 0.15)}
            {...revealOnScroll}
          >
            <m.span
              className={styles.statsRule}
              variants={ruleVariants}
              aria-hidden="true"
            />
            {STATS.map((stat) => (
              <m.div
                key={stat.label}
                className={styles.stat}
                variants={riseVariants}
              >
                <span
                  className={`${styles.statNumber} ${stat.accent ? styles.statNumberAccent : ''}`}
                >
                  {stat.value}
                </span>
                <span className={styles.statText}>{stat.label}</span>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </main>
  )
}
