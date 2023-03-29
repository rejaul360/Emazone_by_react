import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping =  totalShipping + product.shipping
    }

    const tax = totalPrice*10/100

    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Seleted Items : {cart.length}</p>
            <p>Totol Price : ${totalPrice}</p>
            <p>Totol Shiping : {totalShipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;