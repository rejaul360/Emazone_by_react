import React, { useEffect, useState } from 'react';
import Cart from '../components/cart/Cart';
import Product from '../components/product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([ ])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[]);
    
    const handleAddProduct = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart)
    }

    return (
        <div className='shop_container'>
            <div className='products_container'>
                {
                    products.map( product => <Product
                    product = {product}
                    key={product.id}
                    handleAddProduct = {handleAddProduct}
                    ></Product>)
                }
            </div>
            <div className='cart_container'>
               <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;