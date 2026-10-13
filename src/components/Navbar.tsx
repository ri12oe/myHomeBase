import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>Trail & Timber</span>
    </nav>
  )
}