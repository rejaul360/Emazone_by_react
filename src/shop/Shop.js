import React, { useEffect, useState } from 'react';
import Cart from '../components/cart/Cart';
import Product from '../components/product/Product';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([ ])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[]);

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        for(const id in storedCart){
            // console.log(id);
        }
    },[products])
    
    const handleAddProduct = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart)
       addToDb(product.id)
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