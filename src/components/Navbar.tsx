import styles from './Navbar.module.scss'
import HomeIcon from './HomeIcon'
import { useId, useRef, useState } from 'react'
import MenuIcon from './menuIcon'
import GreenDot from './GreenDot'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  function closeMenu() {
    setIsMenuOpen(false)
  }
  return (
    <nav
      className={styles.nav}
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          closeMenu()
          toggleRef.current?.focus()
        }
      }}
    >
      <a href="#" className={styles.logo}>
        <div className={styles.logoMark}>
          <HomeIcon />
        </div>
        <span className={styles.logoText}>
          <span>my</span>HomeBase
        </span>
      </a>
      <button
        ref={toggleRef}
        type="button"
        className={styles.menuToggle}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-controls={menuId}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((previous) => !previous)}
      >
        <MenuIcon />
      </button>

      <div className={styles.desktopContent}>
        <div className={styles.links}>
          <a href="#" onClick={closeMenu}>
            How it works
          </a>
          <a href="#" onClick={closeMenu}>
            Features
          </a>
          <a href="#" onClick={closeMenu}>
            Services
          </a>
          <a href="#" onClick={closeMenu}>
            FAQ
          </a>
        </div>
        <button
          type="button"
          className={styles.buttonPrimary}
          onClick={closeMenu}
        >
          Get early access
        </button>
      </div>
      <div
        id={menuId}
        className={`${styles.menuContent} ${isMenuOpen ? styles.menuOpen : ''}`}
      >
        <div className={styles.mobileLinks}>
          <a href="#" onClick={closeMenu}>
            <span className={styles.mobileLinkIndex}>(03)</span>
            <span className={styles.mobileLinkText}>How it works</span>
            <span className={styles.mobileLinkArrow}>→</span>
          </a>
          <a href="#" onClick={closeMenu}>
            <span className={styles.mobileLinkIndex}>(04)</span>
            <span className={styles.mobileLinkText}>Features</span>
            <span className={styles.mobileLinkArrow}>→</span>
          </a>
          <a href="#" onClick={closeMenu}>
            <span className={styles.mobileLinkIndex}>(05)</span>
            <span className={styles.mobileLinkText}>Services</span>
            <span className={styles.mobileLinkArrow}>→</span>
          </a>
          <a href="#" onClick={closeMenu}>
            <span className={styles.mobileLinkIndex}>(06)</span>
            <span className={styles.mobileLinkText}>FAQ</span>
            <span className={styles.mobileLinkArrow}>→</span>
          </a>
        </div>
        <div className={styles.earlyAccessCard}>
          <div className={styles.frame}>
            <GreenDot />
            <span className={styles.frameTitle}>Early access now open</span>
          </div>
          <span className={styles.callout}>
            See prices before you book. Free to join, no spam.
          </span>
          <input type="email" placeholder="Enter your email" required />
          <button
            type="button"
            className={styles.buttonPrimary}
            onClick={closeMenu}
          >
            Get early access  →
          </button>
        </div>
        <footer>
          <span className={styles.brandContact}>hello@myhomebase.com</span>
          <span className={styles.brandContact}>© 2026 myHomeBase</span>
        </footer>
      </div>
    </nav>
  )
}
