import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import * as appActions from "./hooks/app.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

appActions.register()