import './App.scss'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Rescuer from './Templates/Rescuer'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Listing from './Templates/Listing'

import { navItems, NavigationContext } from './Context/navigation'

function App() {
  let listItems = []
  return (
    <NavigationContext.Provider value={navItems}>
      <div className="App">
        <Header />
        <main className="max-w-screen-xl p-16">
          <Routes>
            {/* <Route path="/rescuer/:name" element={<Rescuer />} /> */}
            <Route exact path="/liste/:name" element={<Listing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </NavigationContext.Provider>
  )
}

export default App
