import React from 'react';
import Nav from './components/nav/Nav';
import Products from './components/products/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Products />
    </div>
    // <Router>
    // <Nav />
    // <Routes>
    //   <Route path='/products' element={<Products />} />
    // </Routes>
    // </Router>
  );
}

export default App;
