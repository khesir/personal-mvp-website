import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './app/app.tsx'
import { ThemeProvider } from './components/providers/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
