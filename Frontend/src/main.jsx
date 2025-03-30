import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout'; // New layout component
import App from './App';
import './index.css';
import ProductScreen from './screens/ProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import AboutUs from './screens/AboutUs';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './screens/PrivateRoute';
import CartScreen from './screens/cartScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}> {/* Wrap routes inside a layout */}
      {/* Home Route */}
      <Route path="/" element={<App />} />

      {/* Public Routes */}
      <Route path="/products" element={<ProductScreen />} />
      <Route path="/product/:productId" element={<ProductDetailScreen />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
      </Route>
    </Route>
  ),
  { basename: '/KickCart/' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
