import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PainelDicomviewUI from './components/Front-end/Dashboard-Painel/PainelDicomUI.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'DashboardDicomWeb',
    element: <PainelDicomviewUI />
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
