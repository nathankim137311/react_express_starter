import React, { useState, useContext } from 'react';
import { CartContext } from '../../CartContext';
import './card.css'; 

function Card({ setShowCard, product }) {
    const [count, setCount] = useState(1);
    const [cart, setCart] = useContext(CartContext);
    // const [cart, setCart] = useState([]);

    const incrementCount = () => setCount(count + 1);
    let decrementCount = () => setCount(count - 1);

    if (count<=1) decrementCount = () => setCount(1); 

    const handleClick = () => setShowCard(false);

    const addToCart = () => {
        const item = {
            ...product,
            quantity: count,
        }
        setCart(prevCart => [...prevCart, item]);           

        console.log(cart);
    }

    const stylingImg = {
        height: 'auto',
        width: 100 + '%',
    }

    const closeBtn = {
        border: 'none',
        borderRadius: 50 + '%',
        height: 15,
        width: 15,
        backgroundColor: 'red',
        color: 'white',
        position: 'absolute',
        top: 10,
        left: 10,
    }

    const container = {
        position: 'relative'
    }
    
    return (
        <div style={container}>
            <div className='product-card'>
                <img style={stylingImg} src={product.imgSrc} alt={product.title} />
                <div className='counter-container'>
                    <button className='counter-btn' onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button className='counter-btn' onClick={incrementCount}>+</button>
                </div>
                <div className='button-container'>
                    <button className='add-btn' onClick={addToCart}>Add To Cart</button>
                    <button style={closeBtn} className='close-btn' onClick={handleClick}></button>
                </div>
            </div>
        </div>
    );
}

export default Card;