import React from 'react';
import './app.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop/products' element={<Products />} />   
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
