import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './casestudy/13.3(1)_layout-route/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>  {/* Ch13.3 위함, Ch13.3 제외 불필요 */}
        <App />
    </BrowserRouter>
  </StrictMode>,
)
