import { useState } from 'react'
import "../public/styles/styles.css"
import Header from './components/Header'
import HeroTop from './components/HeroTop'
import HeroMid from './components/HeroMid'
import Sponsers from './components/Sponsers'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <HeroTop />
      <HeroMid />
      <Sponsers />
      <Team />
      <Footer />
    </div>
    
  )
}

export default App
