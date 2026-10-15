import styles from './promiseStrip.module.scss'
export default function PromiseStrip() {
  return (
    <main className={styles.promiseStripMain}>
      <div className={styles.promiseStrip}>
        <div className={styles.promise}>
          <div className={styles.frame}>
            <h3 className={styles.frameTitle}>No sales calls</h3>
            <span className={styles.frameText}>
              Pros message you in-app only
            </span>
          </div>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.promise}>
          <div className={styles.frame}>
            <h3 className={styles.frameTitle}>Upfront pricing</h3>
            <span className={styles.frameText}>
              See the price before you book
            </span>
          </div>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.promise}>
          <div className={styles.frame}>
            <h3 className={styles.frameTitle}>Verified pros</h3>
            <span className={styles.frameText}>
              Checked before they can list
            </span>
          </div>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.promise}>
          <div className={styles.frame}>
            <h3 className={styles.frameTitle}>Track every job</h3>
            <span className={styles.frameText}>From booked to done</span>
          </div>
        </div>
      </div>
    </main>
  )
}
