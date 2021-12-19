import React from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Creators from './components/creators/Creators';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/creators' element={<Creators />} />
      <Route path='/api/oney' element={<Products />} />
    </Routes>
    </Router>
  );
}

export default App;
