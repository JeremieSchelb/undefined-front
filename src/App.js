import './App.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Rescuer from './Templates/Rescuer'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Listing from './Templates/Listing'

function App() {
  let listItems = []
  return (
    <div className="App">
      <Header />
      <Link className="p-3" to="/">
        Hello
      </Link>
      <Link className="p-3" to="/fr">
        Bonjour
      </Link>
      <Routes>
        <Route path="/fr" element={BonjourMonde()} />
        <Route path="/" element={HelloWorld()} />
        <Route path="/rescuer/:name" element={<Rescuer />} />
        <Route path="/listing" element={<Listing type="boats" />} />
      </Routes>
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
