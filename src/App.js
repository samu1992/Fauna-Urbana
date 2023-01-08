import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import ControlledCarousel from './components/Carousel/Carousel';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Aportes from './components/Aportes/Aportes';
import Testimonios from './components/Testimonios/Testimonios';
//import Rescatados from './components/Rescatados/Rescatados';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ControlledCarousel />} />
          <Route path='/QuienesSomos' element={<QuienesSomos/>} />
        </Routes>
        <Aportes />
        <hr/>
        <Testimonios />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
