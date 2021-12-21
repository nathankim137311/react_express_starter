import React from 'react';
import './app.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Creators from './components/creators/Creators';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/creators' element={<Creators />} />
      <Route path='/creators/OneyPlays/products' 
      element={<Products creator={'OneyPlays'} />} />
      <Route path='/creators/TigerBelly/products' 
      element={<Products creator={'TigerBelly'} />} />
      <Route path='/creators/AngryJoeShow/products' 
      element={<Products creator={'AngryJoeShow'} />} />
      <Route path='/creators/GoodMythicalMorning/products' 
      element={<Products creator={'GoodMythicalMorning'} />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
