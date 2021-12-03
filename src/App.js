import './App.scss'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Listing from './Templates/Listing'
import Homepage from './Templates/Homepage'
import BypassLinks from './Components/BypassLinks';

import { navItems, NavigationContext } from './Context/navigation'

function App() {
  let listItems = []
  return (
    <NavigationContext.Provider value={navItems}>
      <div className="App">
        <BypassLinks idMenu="menu"/>
        <Header />
        <main className="max-w-screen-xl p-16 flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route exact path="/liste/:name" element={<Listing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </NavigationContext.Provider>
  )
}

export default App
