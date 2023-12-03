import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BoletasProvider } from './context/BoletasProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoletasProvider>
      <App />
    </BoletasProvider>
  </React.StrictMode>,
)
