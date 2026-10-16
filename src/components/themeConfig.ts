// Palette + light/dark mode switching (used by ThemeMenu and main.tsx).
// The colors themselves live in styles/_themes.scss.

export type PaletteId = 'blue' | 'pine' | 'lagoon' | 'plum' | 'graphite'
export type Mode = 'light' | 'dark'

export interface Theme {
  palette: PaletteId
  mode: Mode
}

// Swatch colors: [primary, accent] in light mode — shown in the theme menu.
export const PALETTES: {
  id: PaletteId
  label: string
  swatch: [string, string]
}[] = [
  { id: 'blue', label: 'Blue (v3 Editorial)', swatch: ['#2563eb', '#f59e0b'] },
  { id: 'pine', label: 'Pine', swatch: ['#1f6b52', '#f59e0b'] },
  { id: 'lagoon', label: 'Lagoon', swatch: ['#0e7c86', '#f0764a'] },
  { id: 'plum', label: 'Plum', swatch: ['#5b3fd1', '#f59e0b'] },
  { id: 'graphite', label: 'Graphite & Sun', swatch: ['#1c1c1e', '#f5c518'] },
]

const DEFAULT_THEME: Theme = { palette: 'blue', mode: 'light' }
const STORAGE_KEY = 'myhomebase-theme'

// The saved choice, or the default. Storage can be blocked (private mode),
// so failures just fall back to the default.
export function readStoredTheme(): Theme {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    const palette = PALETTES.some((p) => p.id === saved?.palette)
      ? (saved.palette as PaletteId)
      : DEFAULT_THEME.palette
    const mode: Mode = saved?.mode === 'dark' ? 'dark' : 'light'
    return { palette, mode }
  } catch {
    return DEFAULT_THEME
  }
}

let switchTimer = 0

// Put the theme on <html> (data-palette / data-theme) and remember it.
// `animate` eases the color change for a moment instead of snapping.
export function applyTheme(theme: Theme, { animate = false } = {}) {
  const root = document.documentElement
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  if (animate && !reduceMotion) {
    root.classList.add('theme-switching')
    window.clearTimeout(switchTimer)
    switchTimer = window.setTimeout(
      () => root.classList.remove('theme-switching'),
      400,
    )
  }

  // Blue and light are the defaults, so they need no attribute.
  if (theme.palette === 'blue') root.removeAttribute('data-palette')
  else root.setAttribute('data-palette', theme.palette)

  if (theme.mode === 'dark') root.setAttribute('data-theme', 'dark')
  else root.removeAttribute('data-theme')

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme))
  } catch {
    // storage unavailable — the theme still applies for this visit
  }
}
