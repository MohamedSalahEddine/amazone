import React, { Component } from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';


class Product extends Component {
    state = {  } ;
    handleBuy = () => {
        /*dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: 1,
                description:"description",
                title:"title",
                rating:5,
                price:19.99,
                image:"image"
            }
        })*/
    }
    
    render() { 
        
        
        const {id, description, title, rating, price, image} = this.props;
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
                    <button onClick={this.handleBuy} className='buy_btn'>buy now</button>
                </div>
            </div>
        );
    }
}
 
export default Product;

