import styles from './Navbar.module.scss'
import BrandLogo from './BrandLogo'
import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, m, type Variants } from 'motion/react'
import MenuIcon from './menuIcon'
import GreenDot from './GreenDot'
import XMarkIcon from './xMarkIcon'
import { EASE_OUT } from './motionPresets'

const MOBILE_LINKS = [
  { index: '(03)', label: 'How it works', href: '#' },
  { index: '(04)', label: 'Features', href: '#' },
  { index: '(05)', label: 'Services', href: '#' },
  { index: '(06)', label: 'FAQ', href: '#' },
]

// Sheet fades/slides down, then its children rise in one after another.
// On close the whole sheet fades out quickly (children don't re-stagger).
const sheetVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASE_OUT, delayChildren: 0.06, staggerChildren: 0.05 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
}
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const root = document.documentElement
    const body = document.body
    const previousRootOverflow = root.style.overflow
    const previousBodyOverflow = body.style.overflow

    const updateScrollLock = () => {
      root.style.overflow = mobileQuery.matches
        ? 'hidden'
        : previousRootOverflow
      body.style.overflow = mobileQuery.matches
        ? 'hidden'
        : previousBodyOverflow
    }

    updateScrollLock()
    mobileQuery.addEventListener('change', updateScrollLock)

    return () => {
      mobileQuery.removeEventListener('change', updateScrollLock)
      root.style.overflow = previousRootOverflow
      body.style.overflow = previousBodyOverflow
    }
  }, [isMenuOpen])

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
        <BrandLogo />
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
        <AnimatePresence mode="wait" initial={false}>
          <m.span
            key={isMenuOpen ? 'close' : 'open'}
            className={styles.toggleIcon}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            {isMenuOpen ? <XMarkIcon /> : <MenuIcon />}
          </m.span>
        </AnimatePresence>
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
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            key="mobile-menu"
            id={menuId}
            className={`${styles.menuContent} ${styles.menuOpen}`}
            variants={sheetVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className={styles.mobileLinks}>
              {MOBILE_LINKS.map((link) => (
                <m.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  variants={itemVariants}
                >
                  <span className={styles.mobileLinkIndex}>{link.index}</span>
                  <span className={styles.mobileLinkText}>{link.label}</span>
                  <span className={styles.mobileLinkArrow}>→</span>
                </m.a>
              ))}
            </div>
            <m.div className={styles.earlyAccessCard} variants={itemVariants}>
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
                Get early access →
              </button>
            </m.div>
            <m.footer variants={itemVariants}>
              <span className={styles.brandContact}>hello@myhomebase.com</span>
              <span className={styles.brandContact}>© 2026 myHomeBase</span>
            </m.footer>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
