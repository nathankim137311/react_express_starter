import React, { useState } from 'react';
import './card.css'; 

function Card({ setShowCard, product }) {
    const [count, setCount] = useState(1);
    
    const incrementCount = () => setCount(count + 1);
    let decrementCount = () => setCount(count - 1);

    if (count<=1) {
        decrementCount = () => setCount(1); 
    }

    const handleClick = () => setShowCard(false);

    const stylingImg = {
        height: 'auto',
        width: 100 + '%',
    }
    
    return (
        <div className='product-card'>
            <img style={stylingImg} src={product.imgSrc} alt={product.title} />
            <div className='counter-container'>
                <button className='counter-btn' onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button className='counter-btn' onClick={incrementCount}>+</button>
            </div>
            <div className='button-container'>
                <button className='add-btn' >Add To Cart</button>
            </div>
        </div>
    );
}

export default Card;