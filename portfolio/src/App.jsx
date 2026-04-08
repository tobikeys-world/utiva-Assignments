import { useState } from 'react'
import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Services from './component/services';
import Contact from './component/contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App
