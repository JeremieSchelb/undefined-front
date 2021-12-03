import './App.scss'
import { React, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './templates/Homepage'

function App() {
  return (
    <div className="App">
      <Header />
        <Homepage/>
      <Footer />
    </div>
  )
}

function HelloWorld() {
  return <h1 className="App-link bg-light-blue">Hello world</h1>
}

function BonjourMonde() {
  return <h1 className="App-link bg-dark-blue">Bonjour monde</h1>
}

export default App
