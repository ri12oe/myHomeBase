import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { AnimatePresence, m, type Variants } from 'motion/react'
import { Moon, Palette, Sun, X } from 'lucide-react'
import styles from './ThemeMenu.module.scss'
import { EASE_OUT } from './motionPresets'
import {
  PALETTES,
  applyTheme,
  readStoredTheme,
  type Theme,
} from './themeConfig'

// Panel pops up from the button; its circles appear one after another.
const panelVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: EASE_OUT, staggerChildren: 0.035 },
  },
  exit: { opacity: 0, y: 8, scale: 0.95, transition: { duration: 0.15 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: EASE_OUT } },
}

// Floating dev menu (bottom-left): switch light/dark mode and the color palette.
export default function ThemeMenu() {
  const [theme, setTheme] = useState<Theme>(readStoredTheme)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  // Latest theme, so quick successive clicks never build on a stale value
  const latestTheme = useRef(theme)
  const panelId = useId()

  function update(next: Partial<Theme>) {
    const updated = { ...latestTheme.current, ...next }
    latestTheme.current = updated
    setTheme(updated)
    applyTheme(updated, { animate: true })
  }

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const isDark = theme.mode === 'dark'

  return (
    <div ref={rootRef} className={styles.themeMenu}>
      <AnimatePresence>
        {open && (
          <m.div
            id={panelId}
            className={styles.panel}
            role="group"
            aria-label="Theme"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ originY: 1 }}
          >
            <m.button
              type="button"
              className={styles.modeButton}
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
              onClick={() => update({ mode: isDark ? 'light' : 'dark' })}
              variants={itemVariants}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              <span className={styles.tip}>
                {isDark ? 'Light mode' : 'Dark mode'}
              </span>
            </m.button>

            <span className={styles.divider} aria-hidden="true" />

            {PALETTES.map((palette) => {
              const active = palette.id === theme.palette
              return (
                <m.button
                  key={palette.id}
                  type="button"
                  className={`${styles.swatch} ${active ? styles.active : ''}`}
                  aria-label={`${palette.label} palette`}
                  aria-pressed={active}
                  onClick={() => update({ palette: palette.id })}
                  variants={itemVariants}
                  style={
                    {
                      '--swatch-primary': palette.swatch[0],
                      '--swatch-accent': palette.swatch[1],
                    } as CSSProperties
                  }
                >
                  <span className={styles.tip}>{palette.label}</span>
                </m.button>
              )
            })}
          </m.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className={styles.fab}
        aria-label={open ? 'Close theme menu' : 'Open theme menu'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <m.span
          className={styles.fabIcon}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
        >
          {open ? <X size={20} /> : <Palette size={20} />}
        </m.span>
      </button>
    </div>
  )
}
