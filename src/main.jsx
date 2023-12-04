import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import router from './router'
import { BoletasProvider } from './context/BoletasProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoletasProvider>
      <RouterProvider router={router} />
    </BoletasProvider>
  </React.StrictMode>
)
