import React, { Component } from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';


function Product({id, description, title, rating, price, image}) {
    const [{basket}, dispatch] = useStateValue();

    console.log("this is the basket >>> ", basket)
    
    const handleBuy = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                description: description,
                title:title,
                rating:rating,
                price: price,
                image:image
            }
        })
    }
  return (
    <div className='product_container'>
                <div className='product_up'>
                    <p className='product_description'>{description}</p>
                    <h4 className='product_title'>{title}</h4>
                    <p>{Array(rating).fill().map((_,i ) =>(<span>⭐</span>))}</p>
                </div>
                <div className='product_down'>
                    <span><small>$</small><strong>{price}</strong></span>
                    <img src={image} alt={title} className='product_image'/>
                    <button onClick={handleBuy} className='buy_btn'>buy now</button>
                </div>
            </div>
  )
}

export default Product