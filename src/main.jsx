import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './Provider/AuthProvider'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { HelmetProvider } from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
  </React.StrictMode>,
)
