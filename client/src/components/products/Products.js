import React, { useEffect, useState } from 'react';
import './products.css';
import uniqid from 'uniqid';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetchData(); 
  }, []);

  const fetchData = async () => {
      let data = await fetch('/api/oney'); 
      data = await data.json();
      setProducts(data);
      console.log(data);
  }

  const stylingObject = {
      img: {
        height: 'auto',
        width: 90 + '%', 
        objectFit: 'cover',
      },
      card: {
        height: 350,
        width: 300
      }
  }

return (
  <div>
      <h2>Products</h2>
      <ul className='products-container'>
          {products.map(product => {
              return (
                <li key={uniqid()}>
                    <div style={stylingObject.card} className='product'>
                        <img style={stylingObject.img} src={product.imgSrc} alt={product.title} />
                        <span className='product-title'>{product.title}</span>
                    </div>
                </li>
              );
          })}
      </ul>
  </div>
);
}

export default Products;
