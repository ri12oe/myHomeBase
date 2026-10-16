import HomeIcon from './HomeIcon'
import styles from './BrandLogo.module.scss'

export default function BrandLogo() {
  return (
    <span className={styles.brandLogo}>
      <span className={styles.logoMark}>
        <HomeIcon />
      </span>
      <span className={styles.logoText}>
        <span>my</span>HomeBase
      </span>
    </span>
  )
}
