import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Headers from './components/layout/Headers'
import Footer from './components/layout/Footer'
import Home from './components/pages/HomeSection/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Pricing from './components/pages/Pricing'
import Car from './components/pages/Car'
import Blogs from './components/pages/Blogs'
import Contact from './components/pages/Contact'
import Login from './components/pages/login'
function App() {
  const location = useLocation()

  const hideLayout = location.pathname === '/login'
  return (
    <>
      {!hideLayout && <Headers />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/cars" element={<Car />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  )
}

export default App
