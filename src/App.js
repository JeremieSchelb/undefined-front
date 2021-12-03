import './App.scss'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Rescuer from './templates/Rescuer'
import Header from './components/Header'
import Footer from './components/Footer'
import Listing from './templates/Listing'
import Homepage from "./templates/Homepage";

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
          <Homepage/>
        </main>
        <Footer />
      </div>
    </NavigationContext.Provider>
  )
}

export default App
