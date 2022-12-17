import React from 'react'
import Jacket from "../../images/jacket.png"

function Product() {
  return (
    <div className='productDiv'>
                <div className='image'>
                    <img src={Jacket} />
                </div>
                <div className='name'>Headphones</div>
                <div className='price'>
                    <span>{"4000"}</span>
                    <span>{"3000"}</span>
                </div>
                <div className="cta">
                      <div className='add'>
                        Add To Cart
                      </div>
                </div>
            </div>
  )
}

export default Product