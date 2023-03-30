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
        const saveCart = [];
        // Step 1 : get id
        for(let id in storedCart){

            // Step 2 : get the proudct using id
            const addedProduct = products.find(product =>  product.id === id);


            if(addedProduct){
                // Step 3 : Add quantity
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart)
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