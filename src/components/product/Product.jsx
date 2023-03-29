import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    const { name, seller, img, ratings, price } = props.product;
    const handleAddProduct = props.handleAddProduct;




    return (
        <div className='porduct'>
            <img src={img} alt="" />
            <div className='product_info'>
                <h6 className='product_name'>{name}</h6>
                <p className='Price'>Price : ${price}</p>
                <p>Manufacturar : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button onClick={ () => handleAddProduct(props.product)} className='btn_cart'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>

        </div>
    );
};

export default Product;