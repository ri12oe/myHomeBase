import styles from './Navbar.module.scss'
import BrandLogo from './BrandLogo'
import { useEffect, useId, useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, m, type Variants } from 'motion/react'
import MenuIcon from './menuIcon'
import GreenDot from './GreenDot'
import XMarkIcon from './xMarkIcon'
import { EASE_OUT } from './motionPresets'
import { scrollToTarget, setSmoothScrollPaused } from './smoothScroll'

// Shared by the desktop links and the mobile menu.
// Each href points at the `id` on that section's root element.
const NAV_LINKS = [
  { index: '(03)', label: 'How it works', href: '#how-it-works' },
  { index: '(04)', label: 'Features', href: '#features' },
  { index: '(05)', label: 'Services', href: '#services' },
  { index: '(06)', label: 'FAQ', href: '#faq' },
]

const EARLY_ACCESS_HREF = '#early-access'

// Sheet fades/slides down, then its children rise in one after another.
// On close the whole sheet fades out quickly (children don't re-stagger).
const sheetVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
      delayChildren: 0.06,
      staggerChildren: 0.05,
    },
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
  const menuEmailRef = useRef<HTMLInputElement>(null)

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
      // also pause the smooth (wheel) scrolling while the page is locked
      setSmoothScrollPaused(mobileQuery.matches)
    }

    updateScrollLock()
    mobileQuery.addEventListener('change', updateScrollLock)

    return () => {
      mobileQuery.removeEventListener('change', updateScrollLock)
      root.style.overflow = previousRootOverflow
      body.style.overflow = previousBodyOverflow
      setSmoothScrollPaused(false)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  // Mobile menu links: close the menu (which releases the scroll lock) first,
  // then scroll on the next tick so the jump isn't blocked by the lock.
  function goToSection(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    afterScroll?: () => void,
  ) {
    event.preventDefault()
    closeMenu()
    window.setTimeout(() => {
      scrollToTarget(href) // smooth glide + URL update
      afterScroll?.()
    }, 0)
  }

  // Menu "Get early access": carry whatever was typed into the final CTA's
  // email field and put the cursor there, so nothing has to be typed twice.
  function goToSignup(event: MouseEvent<HTMLAnchorElement>) {
    // read now — the menu (and this input) unmounts when it closes
    const typedEmail = menuEmailRef.current?.value.trim() ?? ''
    goToSection(event, EARLY_ACCESS_HREF, () => {
      const signupEmail = document.getElementById(
        'cta-email',
      ) as HTMLInputElement | null
      if (!signupEmail) return
      if (typedEmail) signupEmail.value = typedEmail
      signupEmail.focus({ preventScroll: true }) // don't cut the smooth scroll short
    })
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
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={EARLY_ACCESS_HREF}
          className={styles.buttonPrimary}
          onClick={closeMenu}
        >
          Get early access
        </a>
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
              {NAV_LINKS.map((link) => (
                <m.a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => goToSection(event, link.href)}
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
              <input
                ref={menuEmailRef}
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                autoComplete="email"
              />
              <a
                href={EARLY_ACCESS_HREF}
                className={styles.buttonPrimary}
                onClick={goToSignup}
              >
                Get early access →
              </a>
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
