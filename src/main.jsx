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
          <Route path='/dashboard' element={<MerchantDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
