import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h4>Order Summuery</h4>
            <p>Selected items :{cart.length}</p>
        </div>
    );
};

export default Cart;