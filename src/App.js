import './App.scss';
import {Routes, Route, Link} from "react-router-dom"
import Rescuer from "./components/Rescuer"

function App() {
  return (
    <div className="App">
      <Link className="p-3" to="/">Hello</Link>
      <Link className="p-3" to="/fr">Bonjour</Link>
      <Routes>
        <Route path="/fr" element={BonjourMonde()}/>
        <Route path="/" element={HelloWorld()}/>
        <Route path="/rescuer/:name" element={<Rescuer/>}/>
      </Routes>
    </div>
  );
}


function HelloWorld(){
  return <h1 className="App-link bg-red-600">Hello world</h1>
}

function BonjourMonde(){
  return <h1 className="App-link bg-red-600">Bonjour monde</h1>
}

export default App;
