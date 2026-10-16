import { m, type Variants } from 'motion/react'
import styles from './howitsWorks.module.scss'
import HeaderRow from './HeaderRow'
import ShieldCheckIcon from './ShieldCheckIcon'
import { EASE_OUT, revealOnScroll, staggerVariants } from './motionPresets'

/* Illustration content ---------------------------------------------- */

const SERVICES = ['House cleaning', 'Lawn care', 'Handyman', 'Plumbing', 'Painting']

const PRICES = [
  { name: 'Bright Nest', price: '$172', best: true },
  { name: 'Sparkle & Co.', price: '$189' },
  { name: 'Greenway', price: '$205' },
]

type Status = 'done' | 'now' | 'todo'
const STATUSES: { label: string; status: Status }[] = [
  { label: 'Booked', status: 'done' },
  { label: 'Confirmed', status: 'done' },
  { label: 'On the way', status: 'now' },
  { label: 'Complete', status: 'todo' },
]

/* Motion ------------------------------------------------------------ */

// Each step card rises in; once it lands, its illustration plays out piece by piece.
const stepVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT,
      delayChildren: 0.3,
      staggerChildren: 0.08,
    },
  },
}

// A small UI piece inside an illustration popping into place.
const popVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
}

function CheckMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={11}
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.16671 2.75L4.12504 7.79167L1.83337 5.5"
        stroke="white"
        strokeWidth={1.375}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StepHeading({ number, title }: { number: number; title: string }) {
  return (
    <div className={styles.frame}>
      <div className={styles.innerFrame}>
        <span className={styles.innerFrameNumber}>{number}</span>
      </div>
      <span className={styles.stepText}>{title}</span>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <main id="how-it-works" className={styles.howitWorksMain}>
      <HeaderRow
        labelNumber="(03)"
        labelText="HOW IT WORKS"
        title="Booked in minutes. Not phone calls."
        description="Four steps from “I need a cleaner” to done. You only hear from a pro after you’ve booked one."
      />
      <m.div
        className={styles.steps}
        variants={staggerVariants(0.14)}
        {...revealOnScroll}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* 1 — Tell us the job */}
        <m.div className={styles.step} variants={stepVariants}>
          <div className={styles.Illustration}>
            <div className={styles.IllustrationFrame}>
              {SERVICES.map((service, i) => (
                <m.div
                  key={service}
                  className={`${styles.chip} ${i === 0 ? styles.highlightedChip : ''}`}
                  variants={popVariants}
                >
                  <span
                    className={`${styles.chipText} ${i === 0 ? styles.highlightedChipText : ''}`}
                  >
                    {service}
                  </span>
                </m.div>
              ))}
            </div>
          </div>
          <StepHeading number={1} title="Tell us the job" />
          <span className={styles.stepSubText}>
            Pick a service and answer a few quick questions about your home.
          </span>
        </m.div>

        {/* 2 — Compare upfront prices */}
        <m.div className={styles.step} variants={stepVariants}>
          <div className={styles.Illustration}>
            {PRICES.map((row) => (
              <m.div
                key={row.name}
                className={`${styles.step2Frame} ${row.best ? styles.highlightedStep2Frame : ''}`}
                variants={popVariants}
              >
                <span className={styles.chipText}>{row.name}</span>
                {row.best && (
                  <m.div className={styles.pill} variants={popVariants}>
                    <span className={styles.pillText}>Best</span>
                  </m.div>
                )}
                <span className={styles.priceText}>{row.price}</span>
              </m.div>
            ))}
          </div>
          <StepHeading number={2} title="Compare upfront prices" />
          <span className={styles.stepSubText}>
            See prices, ratings and availability from verified local pros side
            by side.
          </span>
        </m.div>

        {/* 3 — Book and chat in-app */}
        <m.div className={styles.step} variants={stepVariants}>
          <div className={styles.Illustration2}>
            <m.div className={styles.reciveFrame} variants={popVariants}>
              <span className={styles.reciveFrameText}>
                Hi! I can do Thursday at 10am.
              </span>
            </m.div>
            <m.div className={styles.GiverFrame} variants={popVariants}>
              <div className={styles.GiverInnerFrame}>
                <span className={styles.GiverInnerFrameText}>
                  Perfect — see you then!
                </span>
              </div>
            </m.div>
            <m.div className={styles.markFrame} variants={popVariants}>
              <ShieldCheckIcon />
              <span className={styles.markFrameText}>Number hidden from pro</span>
            </m.div>
          </div>
          <StepHeading number={3} title="Book and chat in-app" />
          <span className={styles.stepSubText}>
            Choose your pro and message them inside myHomeBase. Your number
            stays private.
          </span>
        </m.div>

        {/* 4 — Track it to done */}
        <m.div className={styles.step} variants={stepVariants}>
          <div className={styles.Illustration2}>
            {STATUSES.map(({ label, status }) => (
              <m.div key={label} className={styles.BulletFrame} variants={popVariants}>
                {status === 'done' && (
                  <div className={styles.BulletFrameInner}>
                    <CheckMark />
                  </div>
                )}
                {status === 'now' && (
                  <div className={styles.BulletFrameInner2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={8}
                      height={8}
                      viewBox="0 0 8 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx={4} cy={4} r={4} fill="#2563EB" />
                    </svg>
                  </div>
                )}
                {status === 'todo' && <div className={styles.BulletFrameInner3} />}
                <span
                  className={`${styles.BulletFrameText} ${status === 'todo' ? styles.blur : ''}`}
                >
                  {label}
                </span>
                {status === 'now' && (
                  <m.div className={styles.bulletPillFrame} variants={popVariants}>
                    <span className={styles.bulletPillText}>Now</span>
                  </m.div>
                )}
              </m.div>
            ))}
          </div>
          <StepHeading number={4} title="Track it to done" />
          <span className={styles.stepSubText}>
            Follow every step — confirmed, on the way, complete.
          </span>
        </m.div>
      </m.div>
    </main>
  )
}
