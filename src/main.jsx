import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Auth/AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </React.StrictMode>
  </QueryClientProvider>

)
