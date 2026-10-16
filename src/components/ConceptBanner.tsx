import styles from './ConceptBanner.module.scss'

// Thin notice above the nav: this is an unofficial design concept.
// Shown on every page view so anyone who lands here (not just the email
// recipient) knows it isn't the real MyHomeBase site.
export default function ConceptBanner() {
  return (
    <div className={styles.conceptBanner} role="note" data-concept-banner>
      <span>
        <strong>Design concept</strong> — not affiliated with MyHomeBase.
      </span>
      <span className={styles.extra}>
        Text, prices and services are placeholders.
      </span>
    </div>
  )
}
