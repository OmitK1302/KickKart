import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ProductScreen from './screens/ProductScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'
import AboutUs from './screens/AboutUs'

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
  }, 
  {
    path: '/about',
    element: <AboutUs />
  }

],
  {
    basename: '/KickCart/', // Add the base path here
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // Wrap the App component with the Provider component and pass the store as a prop. */}
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
