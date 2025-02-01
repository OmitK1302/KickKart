import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ProductScreen from './screens/ProductScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <ProductScreen />,
  },
  {
    path: '/ProductDetailScreen',
    element: <ProductDetailScreen />,
  },
  {
    path: '/product/:productId',
    element: <ProductDetailScreen />,
  }

],
  {
    basename: '/KickCart/', // Add the base path here
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
