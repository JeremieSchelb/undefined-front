import './App.scss';
import {Routes, Route, Link} from "react-router-dom"
import Rescuer from "./templates/Rescuer"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
      <Link className="p-3" to="/">Hello</Link>
      <Link className="p-3" to="/fr">Bonjour</Link>
      <Routes>
        <Route path="/fr" element={BonjourMonde()}/>
        <Route path="/" element={HelloWorld()}/>
        <Route path="/rescuer/:name" element={<Rescuer/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}


function HelloWorld(){
  return <h1 className="App-link bg-light-blue">Hello world</h1>
}

function BonjourMonde(){
  return <h1 className="App-link bg-dark-blue">Bonjour monde</h1>
}

export default App;
