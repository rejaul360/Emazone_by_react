import React from 'react';
import './product.css'

const Product = (props) => {
    const { name, seller, img, ratings, price } = props.product
    return (
        <div className='porduct'>
            <img src={img} alt="" />
            <div className='product_info'>
                <h6 className='product_name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturar : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button className='btn_cart'>Add to Cart</button>

        </div>
    );
};

export default Product;