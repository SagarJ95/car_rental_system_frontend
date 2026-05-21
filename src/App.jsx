import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Headers from './components/layout/Headers'
import Footer from './components/layout/Footer'
import Home from './components/pages/HomeSection/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
function App() {

  return (
    <>
      <Headers />
      {/* <Home /> */}
      {/* <About /> */}
      <Services />
      <Footer />
    </>
  )
}

export default App
