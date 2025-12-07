import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import '.css/app.css'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>,
)
