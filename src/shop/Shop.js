import React, { useEffect, useState } from 'react';
import Product from '../components/product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])
    

    return (
        <div className='shop_container'>
            <div className='products_container'>
                {
                    products.map( product => <Product
                    product = {product}
                    key={product.id}
                    ></Product>)
                }
            </div>
            <div className='cart_container'>
                <h2>cart container</h2>
            </div>
        </div>
    );
};

export default Shop;