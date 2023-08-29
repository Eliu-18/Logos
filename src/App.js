import logo from './logo.svg';
import './App.css';

import InicioPagina from "./Paginas/InicioPagina"
import TeologosPagina from "./Paginas/TeologosPagina"
import ContactoPagina from "./Paginas/ContactPagina"
import PublicidadPagina from './Paginas/PublicidadPagina';
import LibrosPagina from './Paginas/LibrosPagina';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"

import Nav from "./Componentes/Nav"


function App() {
  return (
    <>
    <Router>
      <Nav />
      <div className="container pt-4">

        
          <Routes>
            <Route path="/" element={<InicioPagina/>} /> 
            <Route path="/contacto" element={<ContactoPagina />} /> 
            <Route path="/teologos" element={<TeologosPagina />} />
            <Route path="/publicidad" element={<PublicidadPagina />} />
            <Route path="/libros" element={<LibrosPagina />} />
          </Routes>

      </div>
    </Router>
    </>
  );
}

export default App;
