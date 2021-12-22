import React, { useEffect, useState } from 'react';
import './products.css';
import Card from './Card';
import uniqid from 'uniqid';

function Products() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
      let isMounted = true; 
      fetchData(); 
      return () => {
        isMounted = false; 
      }

      async function fetchData() {
          let data = await fetch(`/shop/products`); 
          data = await data.json();
          data = data.map(product => ({ ...product, id: uniqid() }));
    
          if (isMounted) {
            setProducts(data);
            setLoading(true);
          }
    
          console.log(data);
      }

  }, []);

  const stylingObject = {
      img: {
        height: 'auto',
        width: 90 + '%', 
        objectFit: 'cover',
      },
      card: {
        height: 400,
        width: 300
      }
  }

  const showCardById = (e) => {
      setShowCard(true);
      const productId = e.target.id; 
      const item = products.find(product => product.id === productId);
      setProduct(item);
      console.log(product);
  }

return (
  <React.Fragment>
    {!loading ? (
      <h1 className='loading-txt'>LOADING</h1>
    ) : (
      <React.Fragment>
        <h2>Products</h2>
        {showCard ? <Card setShowCard={setShowCard} product={product} /> : null}
        <ul className='products-container'>
            {products.map(product => {
                return (
                  <li key={uniqid()}>
                      <div
                      id={product.id}
                      style={stylingObject.card} 
                      className='product'
                      onClick={showCardById}>
                          <img style={stylingObject.img} src={product.imgSrc} alt={product.title} />
                          <span className='product-title'>{product.title}</span>
                          <span className='product-price'>From {product.price}</span>
                      </div>
                  </li>
                );
            })}
        </ul>
      </React.Fragment>
    )}
  </React.Fragment>
);
}

export default Products;
