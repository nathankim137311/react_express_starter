import React, { useState } from 'react';
import './card.css'; 

function Card() {
    const [count, setCount] = useState(1);
    
    const incrementCount = () => setCount(count + 1);
    let decrementCount = () => setCount(count - 1);
    
    if (count<=1) {
        decrementCount = () => setCount(1); 
    }
    
    return (
        <div className='product-card'>
            <div className='counter-container'>
                <button className='counter-btn' onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button className='counter-btn' onClick={incrementCount}>+</button>
            </div>
            <button>Add To Cart</button>
            <button>Close</button>
        </div>
    );
}

export default Card;