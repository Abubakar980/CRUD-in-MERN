import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster/>
  </StrictMode>,
)


// Tutorial Link
// https://www.youtube.com/watch?v=1b9Ijrg2PpI&list=PL1oBBulPlvs97CWAXfqLJra7TamlwsfdS&index=1