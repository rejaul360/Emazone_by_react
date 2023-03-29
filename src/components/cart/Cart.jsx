import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping =  totalShipping + product.shipping
    }



    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Seleted Items : {cart.length}</p>
            <p>Totol Price : ${total}</p>
            <p>Totol Shiping : {totalShipping}</p>
            <p>Tax :</p>
            <p>Grand Total :</p>
        </div>
    );
};

export default Cart;