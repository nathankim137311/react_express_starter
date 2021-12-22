import React from 'react';
import './app.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

import { CartContext } from './CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <CartContext.Provider />
        <Route path='/shop/products' element={<Products />} />   
        <Route path='/cart' element={<Cart />} />
      <CartContext.Provider />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
