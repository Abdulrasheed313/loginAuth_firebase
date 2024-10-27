import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Resgistration from './pages/Resgistration'
import Layout from './Layout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children:[
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'Resgistration',
        element: <Resgistration />,
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>

 </RouterProvider>

)
