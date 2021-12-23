import React from 'react';
import './app.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';

function App() {
  return (
    <Router>
      <Nav />
      <CartProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop/products' 
        element={<Products />} />   
        <Route path='/cart' 
        element={<Cart />} />
      </Routes>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;
