import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Headers from './components/layout/Headers'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
function App() {
  console.log("in")
  return (
    <>
      <Headers />
      <Home />
      <Footer />
    </>
  )
}

export default App
