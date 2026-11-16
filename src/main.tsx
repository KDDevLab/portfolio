import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque/index.css'
import '@fontsource-variable/inter/index.css'
import '@fontsource-variable/martian-mono/index.css'
import './styles.css'
import App from './App.tsx'

// Umami-Analyse nur laden, wenn sie konfiguriert ist
const umamiSrc = import.meta.env.VITE_UMAMI_SCRIPT_URL
const umamiId = import.meta.env.VITE_UMAMI_WEBSITE_ID
if (umamiSrc && umamiId) {
  const s = document.createElement('script')
  s.defer = true
  s.src = umamiSrc
  s.dataset.websiteId = umamiId
  document.head.appendChild(s)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
