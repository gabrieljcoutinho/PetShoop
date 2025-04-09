import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Pages
import Home from './pages/Home';
import Loja from './pages/Loja';
import Contato from './pages/Contato'; // O componente Contato foi importado, mas não está sendo utilizado no momento

// Components
import Header from './components/Header'; // O Header continua sendo importado
import Footer from './components/Footer'; // O Footer continua sendo importado

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Loja" element={<Loja />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;