import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app/App.tsx'
import './index.css'
import Login from './auth/Login.tsx'
import Register from './auth/Register.tsx'
import { ModalProvider } from './providers/ModalProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>,
)
