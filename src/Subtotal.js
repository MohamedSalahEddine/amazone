import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

class Subtotal extends Component {
    state = {  } 
    render() { 
        return (
            <div className='subtotal_container'>
                <CurrencyFormat
                    renderText={(value)=>(
                        <>
                            <p>Subtotal ( {9} items) : 
                                <strong>{`${value}`}</strong>
                            </p>
                            <small>
                                <input type="checkbox"/>This order contains a gift
                            </small>
                        </>
                    )}
                    decimalScale={2}
                    value={45}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                />
                <button>Proceed to checkout</button>
            </div>
        );
    }
}
 
export default Subtotal;