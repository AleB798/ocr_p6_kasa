import { Routes, Route } from 'react-router-dom';
//importer toutes les pages
import Home from "./pages/Home";
import About from "./pages/About";
import Rental from "./pages/Rental";
import Error from "./pages/Error";


function App() {
  console.log('APP is okay'); // Ajout d'un console.log pour vérifier si le composant est rendu
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rental/:id" element={<Rental />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
