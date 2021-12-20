import React from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Creators from './components/creators/Creators';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/creators' element={<Creators />} />
      <Route path='/creators/products/OneyPlays' 
      element={<Products creator={'OneyPlays'} />} />
      <Route path='/creators/products/TigerBelly' 
      element={<Products creator={'TigerBelly'} />} />
      <Route path='/creators/products/AngryJoeShow' 
      element={<Products creator={'AngryJoeShow'} />} />
      <Route path='/creators/products/GoodMythicalMorning' 
      element={<Products creator={'GoodMythicalMorning'} />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </Router>
  );
}

export default App;
