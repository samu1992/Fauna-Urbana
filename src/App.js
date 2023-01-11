import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './components/Inicio/Inicio';
import Rescatados from './components/Rescatados/Rescatados';
import Requisitos from './components/Requisitos/Requisitos';
import Castracion from './components/Castracion/Castracion';
import Donaciones from './components/Donaciones/Donaciones';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/QuienesSomos' element={<QuienesSomos/>} />
          <Route path='/Rescatados' element={<Rescatados/>} />
          <Route path='/Requisitos' element={<Requisitos/>} />
          <Route path='/Castracion' element={<Castracion />} />
          <Route path='/Donaciones' element={<Donaciones />} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
