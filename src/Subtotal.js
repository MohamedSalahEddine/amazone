import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import { totalAmount } from './Reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';


function Subtotal() {
    const[{basket}, dispatch]=useStateValue();

    //let total = basket.map()
  return (
    <div className='subtotal_container'>
                <CurrencyFormat
                    renderText={(value)=>(
                        <>
                            <p>Subtotal ( {basket.length} items) : 
                                <strong className='value'>{value}</strong>
                            </p>
                            <small className="check">
                                <input type="checkbox"/>This order contains a gift
                            </small>
                        </>
                    )}
                    decimalScale={2}
                    value={totalAmount(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                />
                <button className='proceed'>Proceed to checkout</button>
            </div>
  )
}

export default Subtotal