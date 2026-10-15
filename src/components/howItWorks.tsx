import styles from './howitsWorks.module.scss'
import HeaderRow from './HeaderRow'
import ShieldCheckIcon from './ShieldCheckIcon'
export default function HowItWorks() {
  return (
    <main className={styles.howitWorksMain}>
      <HeaderRow
        labelNumber="(03)"
        labelText="HOW IT WORKS"
        title="Booked in minutes. Not phone calls."
        description="Four steps from “I need a cleaner” to done. You only hear from a pro after you’ve booked one."
      />
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.Illustration}>
            <div className={styles.IllustrationFrame}>
              <div className={`${styles.chip} ${styles.highlightedChip}`}>
                <span className={`${styles.chipText} ${styles.highlightedChipText}`}>House cleaning</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipText}>Lawn care</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipText}>Handyman</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipText}>Plumbing</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipText}>Painting</span>
              </div>
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.innerFrame}>
              <span className={styles.innerFrameNumber}>1</span>
            </div>
            <span className={styles.stepText}>Tell us the job</span>
          </div>
          <span className={styles.stepSubText}>
            Pick a service and answer a few quick questions about your home.
          </span>
        </div>
        <div className={styles.step}>
          <div className={styles.Illustration}>
            <div
              className={`${styles.step2Frame} ${styles.highlightedStep2Frame}`}
            >
              <span className={styles.chipText}>House cleaning</span>
              <div className={styles.pill}>
                <span className={styles.pillText}>Best</span>
              </div>
              <span className={styles.priceText}>$172</span>
            </div>
            <div className={styles.step2Frame}>
              <span className={styles.chipText}>Sparkle & Co.</span>

              <span className={styles.priceText}>$182</span>
            </div>
            <div className={styles.step2Frame}>
              <span className={styles.chipText}>Greenway</span>

              <span className={styles.priceText}>$205</span>
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.innerFrame}>
              <span className={styles.innerFrameNumber}>2</span>
            </div>
            <span className={styles.stepText}>Compare upfront prices</span>
          </div>
          <span className={styles.stepSubText}>
            See prices, ratings and availability from verified local pros side
            by side.
          </span>
        </div>
        <div className={styles.step}>
          <div className={styles.Illustration2}>
            <div className={styles.reciveFrame}>
              <span className={styles.reciveFrameText}>
                Hi! I can do Thursday at 10am.
              </span>
            </div>
            <div className={styles.GiverFrame}>
              <div className={styles.GiverInnerFrame}>
                <span className={styles.GiverInnerFrameText}>
                  Perfect — see you then!
                </span>
              </div>
            </div>
            <div className={styles.markFrame}>
              <ShieldCheckIcon />
              <span className={styles.markFrameText}>
                Number hidden from pro
              </span>
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.innerFrame}>
              <span className={styles.innerFrameNumber}>3</span>
            </div>
            <span className={styles.stepText}>Book and chat in-app</span>
          </div>
          <span className={styles.stepSubText}>
            Choose your pro and message them inside myHomeBase. Your number
            stays private.
          </span>
        </div>
        <div className={styles.step}>
          <div className={styles.Illustration2}>
            <div className={styles.BulletFrame}>
              <div className={styles.BulletFrameInner}>
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
              </div>
              <span className={styles.BulletFrameText}>Booked</span>
            </div>
            <div className={styles.BulletFrame}>
              <div className={styles.BulletFrameInner}>
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
              </div>
              <span className={styles.BulletFrameText}>Confirmed</span>
            </div>
            <div className={styles.BulletFrame}>
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
              <span className={styles.BulletFrameText}>On the way</span>
              <div className={styles.bulletPillFrame}>
                <span className={styles.bulletPillText}>Now</span>
              </div>
            </div>
            <div className={styles.BulletFrame}>
              <div className={styles.BulletFrameInner3}></div>
              <span className={`${styles.BulletFrameText} ${styles.blur}`}>
                Complete
              </span>
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.innerFrame}>
              <span className={styles.innerFrameNumber}>4</span>
            </div>
            <span className={styles.stepText}>Track it to done</span>
          </div>
          <span className={styles.stepSubText}>
            Follow every step — confirmed, on the way, complete.
          </span>
        </div>
      </div>
    </main>
  )
}
