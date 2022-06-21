import React, { Component } from 'react';
import Subtotal from './Subtotal';
class Checkout extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container_checkout'>
                <div className='checkout_left'>
                    <h2>Your Basket : </h2>
                </div>
                <div className='checkout_right'>
                    <Subtotal/>
                </div>
            </div>
        );
    }
}
 
export default Checkout;