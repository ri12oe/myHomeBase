import styles from './statement.module.scss'

export default function Statement() {
  return (
    <main className={styles.statementMain}>
      <div className={styles.statement}>
        <div className={styles.labelcol}>
          <label>
            <span className={styles.labelNumber}>(01)</span>
            <span className={styles.labelText}>The Idea</span>
          </label>
        </div>
        <div className={styles.bodycol}>
          <h2 className={styles.bodyHeading}>
            Every quote site works the same way: you ask for a price, and your
            phone starts ringing.{' '}
            <span className={styles.grayText}>
              myHomeBase flips it. You see real prices first, your number stays
              private, and pros can only reach you in-app — after you book.    
            </span>
          </h2>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>$0</span>
              <span className={styles.statText}>To join early access</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber} style={{ color: '#fff' }}>0</span>
              <span className={styles.statText}>Sale calls, ever</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber} style={{ color: '#fff' }}>1</span>
              <span className={styles.statText}>Thread per job</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber} style={{ color: '#fff' }}>5</span>
              <span className={styles.statText}>Live status steps</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
