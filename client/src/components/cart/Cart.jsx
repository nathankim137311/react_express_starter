import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

function Cart() {
    const cart = useContext(CartContext); 
    return (
        <React.Fragment>
            <h1>{cart.title}</h1>
        </React.Fragment>
    )
}

export default Cart