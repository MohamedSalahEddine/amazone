import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id, description, title, rating, price, image}) {

  const [{basket}, dispatch]= useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
    <div className='CheckoutProduct_container'>
        <div className='cp_left'>
            <img src={image} alt={title} className='cp_image'/>
        </div>
        <div className='cp_right'>
            <p className='cp_description'>{description}</p>
            <span className='cp_title'>{title}</span>
            <span className='cp_price'><small>$</small>{price}</span>
            <span className='cp_rating'>{Array(rating).fill().map(()=><span>⭐</span>)}</span>
            <button className='remove_btn' onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct