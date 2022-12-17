import React from 'react'
import "../../styles/banner.css"
import Phone from "../../images/banner.png"
function Banner() {
  return (
    <div id='banner'>
        <div className='info colInfo'>
            <h1>Discover Smartphones & Accessories</h1>
            <span>Browse our store to find new collections of smartphones, 
                laptops and other electronics and accessories
                 at the best prices.
            </span>
            <div className='shop'>
                <span>Shop Now</span>
            </div>
        </div>
        <div className='info'>
            <img src={Phone}/>
        </div>
    </div>
  )
}

export default Banner