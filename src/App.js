import './App.scss';
import {Routes, Route, Link} from "react-router-dom"
import Rescuer from "./templates/Rescuer"
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
        <Header/>
      <Link className="p-3" to="/">Hello</Link>
      <Link className="p-3" to="/fr">Bonjour</Link>
      <Routes>
        <Route path="/rescuer/:name" element={<Rescuer/>}/>
      </Routes>
    </div>
  );
}

export default App;
