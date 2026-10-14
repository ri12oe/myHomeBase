import styles from './Hero.module.scss'
import GreenDot from './GreenDot'
import MailIcon from './MailIcon'
import ArrowRightIcon from './ArrowRightIcon'
import CheckIcon from './CheckIcon'
export default function Hero() {
  return (
    <main>
      <div className={styles.heroTop}>
        <div className={styles.heroLeft}>
          <div className={styles.eyebrows}>
            <GreenDot
              width={8}
              height={8}
              filter="drop-shadow(0 0 6px rgba(16, 185, 129, 0.50))"
            />
            <span className={styles.eyebrowTitle}>Early access now open</span>
          </div>
          <span className={styles.heroTitle}>
            Know the price <span className={styles.highlight}>before</span> you
            book.
          </span>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.callout}>
            Compare upfront prices from verified local pros for cleaning, lawn
            care and more — then book in a few taps. No sales calls. No sharing
            your number with a dozen companies.
          </p>
          <div className={styles.emailCapture}>
            <MailIcon />
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              required
            />
            <button  type="button"  className={styles.buttonPrimary}>
                <span className={styles.buttonText}>Get early access</span>
                <ArrowRightIcon  color="#fff" />
            </button>
          </div>
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
        </div>
      </div>
      <div className={styles.showcasePanel}></div>
    </main>
  )
}
