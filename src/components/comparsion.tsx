import styles from './comparsion.module.scss'
import HomeIcon from './HomeIcon'
export default function Comparsion() {
  return (
    <main className={styles.comparsionMain}>
      <div className={styles.headerRow}>
        <div className={styles.title}>
          <label>
            <span className={styles.labelNumber}>(02)</span>
            <span className={styles.labelText}>Why MyHomeBase</span>
          </label>
          <h2 className={styles.sectionTitle}>
            Getting a quote shouldn’t cost you your peace and quiet.
          </h2>
        </div>
        <span className={styles.headerSub}>
          Most quote sites sell your request to as many companies as they can.
          We built the opposite.
        </span>
      </div>
      <div className={styles.comparisonTable}>
        <div className={styles.columnBefore}>
          <div className={styles.columnTopFrame}>
            <span className={styles.columnTopText}>The Usual Way</span>
          </div>
          <div className={styles.columnFrame}>
            <span className={styles.columnFrameNumber}>01</span>
            <span className={styles.columnFrameText}>
              “Request a quote,” then wait days for callbacks
            </span>
          </div>
          <div className={styles.columnFrame}>
            <span className={styles.columnFrameNumber}>02</span>
            <span className={styles.columnFrameText}>
              Your number is passed to multiple companies
            </span>
          </div>
          <div className={styles.columnFrame}>
            <span className={styles.columnFrameNumber}>03</span>
            <span className={styles.columnFrameText}>
              High-pressure sales calls
            </span>
          </div>
          <div className={styles.columnFrame}>
            <span className={styles.columnFrameNumber}>04</span>
            <span className={styles.columnFrameText}>
              No idea who’s actually showing up
            </span>
          </div>
          <div className={styles.columnFrame}>
            <span className={styles.columnFrameNumber}>05</span>
            <span className={styles.columnFrameText}>
              “Are they still coming?”
            </span>
          </div>
        </div>
        <div className={styles.columnAfter}>
          <div className={styles.columnTopAfterFrame}>
            <div className={styles.homeIconWrapper}>
              <HomeIcon />
            </div>
            <span className={styles.nameBrand}>
              <span className={styles.nameBrandHighlight}>my</span>HomeBase
            </span>
          </div>
          <div className={styles.columnAfterFrame}>
            <span className={styles.columnFrameText}>
              Prices are shown upfront. Compare them in one place.
            </span>
          </div>
          <div className={styles.columnAfterFrame}>
            <span className={styles.columnFrameText}>
              Your contact info is never shared without your OK.
            </span>
          </div>
          <div className={styles.columnAfterFrame}>
            <span className={styles.columnFrameText}>
              Message pros in-app, on your schedule.
            </span>
          </div>
          <div className={styles.columnAfterFrame}>
            <span className={styles.columnFrameText}>
              Verified pros, rated on real, completed jobs.
            </span>
          </div>
          <div className={styles.columnAfterFrame}>
            <span className={styles.columnFrameText}>
              Live status, from booked to done.
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
