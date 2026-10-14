import styles from './Hero.module.scss'
import GreenDot from './GreenDot'
import MailIcon from './MailIcon'
import ArrowRightIcon from './ArrowRightIcon'
import CheckIcon from './CheckIcon'
import ShowcasePanel from './ShowcasePanel'
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
          <h1 className={styles.heroTitle}>
            Know the price <span className={styles.highlight}>before</span> you
            book.
          </h1>
        </div>
        <div className={styles.heroRight}>
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
        </div>
      </div>
      <ShowcasePanel />
    </main>
  )
}
