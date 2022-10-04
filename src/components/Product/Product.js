import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'




const Product = (props) => {
    console.log(props);
    const {handleAddToCart, product} = props;
    const {name, seller, price, ratings, img} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h4>Price:${price}</h4>
            <small>Manufacturer: {seller}</small> <br />
            <small>Ratings: {ratings} star</small>
            <button onClick={ ()=> handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                
            </button>
        </div>
        
    );
};

export default Product;