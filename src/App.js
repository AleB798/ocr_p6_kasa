import './App.css';
import { Routes, Route } from 'react-router-dom';
//importer toutes les pages
import Home from "./pages/Home";
import About from "./pages/About";
import Rental from "./pages/Rental";
import Error from "./pages/Error";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/Rental/:id" element={ <Rental /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}
// <Route path='/nomduchemin' element={ <nomdelapage /> } />

export default App;
