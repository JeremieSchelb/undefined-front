import './App.scss';
import {Routes, Route} from "react-router-dom"
import Rescuer from "./Templates/Rescuer"
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/rescuer/:name" element={<Rescuer/>}/>
      </Routes>
    </div>
  );
}

export default App;
