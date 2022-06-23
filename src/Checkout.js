import React, { Component } from 'react';
import Subtotal from './Subtotal';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{basket}, dispatch]=useStateValue();
    alert(basket[0].title)
  return (
    <div className='container_checkout'>
                <div className='checkout_left'>
                    <h2>Your Basket : </h2>
                    {
                        basket.map(item=>(
                            <CheckoutProduct 
                                id={item.id}
                                description={item.description}
                                title={item.title}
                                rating={item.rating}
                                image={item.image}
                                price={item.price}
                            />
                        ))
                    }
                </div>
                <div className='checkout_right'>
                    <Subtotal/>
                </div>
            </div>
  )
}

export default Checkout