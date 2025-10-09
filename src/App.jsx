import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import FPC from './page/FPC'
import Enquiry from './page/Enquiry'
import Login from './page/Login'
import Register from './page/Register'

const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/fpc" element={<FPC/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App