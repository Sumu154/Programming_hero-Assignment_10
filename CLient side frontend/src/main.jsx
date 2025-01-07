import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


import router from './routes/router'
import AuthProvider from './contexts/AuthProvider'
import CampaignProvider from './contexts/CampaignProvider'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> <CampaignProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CampaignProvider> </AuthProvider>
  </StrictMode>,
)
