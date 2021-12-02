import './App.scss';
import {Routes, Route, Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Link className="p-3" to="/">Hello</Link>
      <Link className="p-3" to="/fr">Bonjour</Link>
      <Routes>
        <Route path="/fr" element={BonjourMonde()}></Route>
        <Route path="/" element={HelloWorld()}></Route>
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
