import { Analytics } from '@vercel/analytics/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './app/app.tsx'
import { ThemeProvider } from './components/providers/theme-provider.tsx'
import { HelmetProvider } from 'react-helmet-async'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <App />
        <Analytics />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
