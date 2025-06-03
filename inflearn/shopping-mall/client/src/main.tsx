import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/index.scss'
import App from './App.tsx'
import { worker } from './mocks/browser.ts'
import { RecoilRoot } from 'recoil'

if (import.meta.env.DEV) {
  worker.start()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>,
)
