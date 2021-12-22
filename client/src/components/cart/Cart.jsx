import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

function Cart() {
    const cart = useContext(CartContext); 
    return (
        <React.Fragment>
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map(product => {
                    return (
                    <li>{product.id}</li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default Cart