// Site-wide smooth, eased scrolling (Lenis).
//
// - Mouse wheel / trackpad get a soft, slightly slower glide with momentum.
// - Touch scrolling stays native on phones (Lenis default).
// - Skipped entirely for people who turn motion off on their device.
// - In-page links ("#features", "#faq", …) glide to their section.
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenis: Lenis | null = null

// Called once from App. Returns a cleanup function.
export function startSmoothScroll(): () => void {
  if (lenis) return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}
  }

  lenis = new Lenis({
    autoRaf: true, // Lenis drives its own animation loop
    lerp: 0.08, // lower = slower, softer glide (default 0.1)
    wheelMultiplier: 0.9, // each wheel tick travels a little less
  })
  document.addEventListener('click', handleAnchorClick)

  return () => {
    document.removeEventListener('click', handleAnchorClick)
    lenis?.destroy()
    lenis = null
  }
}

// Scroll to an in-page target ("#faq", or "#" for the top) and update the URL.
// Works with or without Lenis running.
export function scrollToTarget(href: string) {
  const element =
    href === '#' ? null : document.querySelector<HTMLElement>(href)
  if (href !== '#' && !element) return

  if (lenis) {
    // force: still scrolls if Lenis was paused a moment ago (e.g. menu closing)
    lenis.scrollTo(element ?? 0, { force: true })
  } else if (element) {
    element.scrollIntoView({ block: 'start' })
  } else {
    window.scrollTo({ top: 0 })
  }

  if (href !== '#') window.history.pushState(null, '', href)
}

// Pause/resume smooth scrolling, e.g. while the mobile menu locks the page.
export function setSmoothScrollPaused(paused: boolean) {
  if (paused) lenis?.stop()
  else lenis?.start()
}

// Same-page "#…" links glide instead of jumping.
function handleAnchorClick(event: MouseEvent) {
  // Leave alone: links React already handled, new-tab/modifier clicks, non-left clicks
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return
  }

  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
    'a[href^="#"]',
  )
  if (!link) return

  event.preventDefault()
  scrollToTarget(link.getAttribute('href') ?? '#')
}
