import { m, type Variants } from 'motion/react'
import style from './footer.module.scss'
import BrandLogo from './BrandLogo'
import {
  EASE_OUT,
  revealOnScroll,
  riseVariants,
  staggerVariants,
} from './motionPresets'

// Each href points at the `id` on that section's root element.
// Privacy and Terms have no pages yet — swap in real URLs before launch.
const LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#contact' }, // the "Still have questions?" box in the FAQ
]
const WORDMARK = 'myHomeBase'

// Divider draws in from the left.
const ruleVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE_OUT } },
}

// Each wordmark letter rises from below the footer's clipped bottom edge.
const letterVariants: Variants = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
}

export default function Footer() {
  return (
    <footer className={style.pageFooter}>
      <m.div
        className={style.topFrame}
        variants={staggerVariants(0.05)}
        {...revealOnScroll}
      >
        <m.div className={style.brandLogoFrame} variants={riseVariants}>
          <BrandLogo />
          <span className={style.shortDesp}>
            Upfront prices. Verified pros. Zero sales calls.
          </span>
        </m.div>
        <m.nav className={style.linksFrame} variants={staggerVariants(0.04)}>
          {LINKS.map((link) => (
            <m.a key={link.label} href={link.href} variants={riseVariants}>
              {link.label}
            </m.a>
          ))}
        </m.nav>
      </m.div>
      <m.span
        className={style.rule}
        variants={ruleVariants}
        style={{ originX: 0 }}
        {...revealOnScroll}
      />
      <m.div
        className={style.middleFrame}
        variants={riseVariants}
        {...revealOnScroll}
      >
        <span className={style.copyright}>
          © 2026 myHomeBase. All rights reserved.
        </span>
        <span className={style.callout}>
          Made for homeowners who hate sales calls.
        </span>
      </m.div>
      <m.div
        className={style.wordMark}
        variants={staggerVariants(0.04)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <span className={style.wordMarkText} aria-label={WORDMARK}>
          {[...WORDMARK].map((letter, i) => (
            <m.span
              key={i}
              className={style.wordMarkLetter}
              variants={letterVariants}
              aria-hidden="true"
            >
              {letter}
            </m.span>
          ))}
        </span>
      </m.div>
    </footer>
  )
}
