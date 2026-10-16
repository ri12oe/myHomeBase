import { m } from 'motion/react'
import styles from './Hero.module.scss'
import { EASE_OUT, fadeUp } from './motionPresets'
import GreenDot from './GreenDot'
import MailIcon from './MailIcon'
import ArrowRightIcon from './ArrowRightIcon'
import CheckIcon from './CheckIcon'
import ShowcasePanel from './ShowcasePanel'
// Each headline word slides up from behind its own mask, a beat apart.
// Masking per word (not per line) lets the headline wrap naturally at any width.
const HEADLINE = ['Know', 'the', 'price', 'before', 'you', 'book.']
const HIGHLIGHT = 'before'

const wordRise = (index: number) => ({
  initial: { y: '110%' },
  animate: { y: 0 },
  transition: { duration: 0.8, delay: 0.08 + index * 0.05, ease: EASE_OUT },
})

export default function Hero() {
  return (
    <main>
      <div className={styles.heroTop}>
        <div className={styles.heroLeft}>
          <m.div className={styles.eyebrows} {...fadeUp(0, 12, 0.7)}>
            <GreenDot
              width={8}
              height={8}
              filter="drop-shadow(0 0 6px rgba(16, 185, 129, 0.50))"
            />
            <span className={styles.eyebrowTitle}>Early access now open</span>
          </m.div>
          <h1 className={styles.heroTitle}>
            {HEADLINE.map((word, i) => (
              <span key={word}>
                <span className={styles.wordMask}>
                  <m.span
                    className={`${styles.word} ${word === HIGHLIGHT ? styles.highlight : ''}`}
                    {...wordRise(i)}
                  >
                    {word}
                  </m.span>
                </span>
                {i < HEADLINE.length - 1 && ' '}
              </span>
            ))}
          </h1>
        </div>
        <m.div className={styles.heroRight} {...fadeUp(0.35)}>
          <p className={styles.callout}>
            Compare upfront prices from verified local pros for cleaning, lawn
            care and more — then book in a few taps. No sales calls. No sharing
            your number with a dozen companies.
          </p>
          <form
            className={styles.emailCapture}
            onSubmit={(e) => e.preventDefault()}
          >
            <label className={styles.field}>
              <MailIcon />
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                required
              />
            </label>
            <button type="submit" className={styles.buttonPrimary}>
              <span className={styles.buttonText}>Get early access</span>
              <ArrowRightIcon color="#fff" />
            </button>
          </form>
          <div className={styles.microcopy}>
            <div className={styles.microSubContainer}>
              <CheckIcon color="#16B981" />
              <span className={styles.microText}>Free to join</span>
            </div>
            <div className={styles.microSubContainer}>
              <CheckIcon color="#16B981" />
              <span className={styles.microText}>No spam, ever</span>
            </div>
            <div className={styles.microSubContainer}>
              <CheckIcon color="#16B981" />
              <span className={styles.microText}>Unsubscribe anytime</span>
            </div>
          </div>
        </m.div>
      </div>
      <m.div {...fadeUp(0.45, 28, 0.9)}>
        <ShowcasePanel />
      </m.div>
    </main>
  )
}
