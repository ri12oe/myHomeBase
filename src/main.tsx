import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App.tsx'
import { applyTheme, readStoredTheme } from './components/themeConfig'

// Apply the saved palette / light-dark mode before the first paint (no color flash)
applyTheme(readStoredTheme())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
