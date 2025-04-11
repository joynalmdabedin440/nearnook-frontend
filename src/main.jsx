import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';

import Merchant from './routes/Merchant.jsx';
import MerchantLogin from './pages/Auth/MerchantLogin.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import MerchantDashboard from './pages/MerchantDashboard.jsx';
import AddProduct from './components/AddProduct.jsx';
import Orders from './components/Orders.jsx';
import Products from './components/Products.jsx';
import Analytics from './components/Analytics.jsx';
import Explore from './pages/Explore.jsx';
import CartItems from './components/customer/CartItems.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/signIn' element={<Login />} />
          <Route path='/signUp' element={<Register />} />
          <Route path='/merchant' element={<Merchant />} />
          <Route path='/merchantLogin' element={<MerchantLogin />} />

          <Route path='/dashboard' element={<MerchantDashboard />}>
            <Route index element={<AddProduct />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='orders' element={<Orders />} />
            <Route path='products' element={<Products />} />
            <Route path='analytics' element={<Analytics />} />

          </Route>

          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<CartItems />} />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
