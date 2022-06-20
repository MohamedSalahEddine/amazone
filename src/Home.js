import React, { Component } from 'react';
import './Home.css';
import Product from './Product';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='home_container'>
                <img src='https://tinyurl.com/2yzw5xbk' alt='amazone' className='home_image'/>
                <div className='home_row'>
                    <Product
                        id={1}
                        description={"the first description of the first product first hand the first description of the first product first hand "}
                        title={"first title"}
                        rating={5}
                        price={19.99}
                        image={"https://tinyurl.com/4mbtyzs9"}
                    />
                    <Product
                        id={2}
                        description={"the second description of the second product second hand the second description of the second product second hand "}
                        title={"second title"}
                        rating={3}
                        price={29.99}
                        image={"https://tinyurl.com/4mbtyzs9"}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id={3}
                        description={"the second description of the second product second hand the second description of the second product second hand "}
                        title={"third title"}
                        rating={4}
                        price={98.99}
                        image={"https://tinyurl.com/4mbtyzs9"}
                        />
                    <Product
                        id={4}
                        description={"the second description of the second product second hand the second description of the second product second hand "}
                        title={"fourth title"}
                        rating={4}
                        price={50.99}
                        image={"https://tinyurl.com/4mbtyzs9"}
                    />
                    <Product
                        id={5}
                        description={"the second description of the second product second hand the second description of the second product second hand "}
                        title={"fifth title"}
                        rating={5}
                        price={9.99}
                        image={"https://tinyurl.com/4mbtyzs9"}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id={6}
                        description={"the second description of the second product second hand the second description of the second product second hand "}
                        title={"sixth title"}
                        rating={5}
                        price={30.99}
                        image={"https://tinyurl.com/4mbtyzs9"}
                    />
                </div>
            </div>
        );
    }
}
 
export default Home;