import { useState } from 'react'
import Header from './components/layouts/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contacto from './components/pages/Contacto';
import Galeria from './components/pages/Galeria';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>     
    </>
  )
}

export default App
