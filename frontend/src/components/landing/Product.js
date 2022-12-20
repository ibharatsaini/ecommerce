import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Product({id,name,mrp,price,img,star}) {
  return (
    <Link to={`/product/${id}`} className='productDiv'>
                <div className='image'>
                    <img src={img} />
                </div>
                <div className='starsOff'>
                <div className='nameOff'>{name}</div>
                        
                        <div className='ratingOff'>
                            {Math.floor(star)}&nbsp;
                            <BsFillStarFill color={"lightgoldenrodyellow"}/>
                        </div>
                    {/* {100 - Math.floor(mrp * 100/price)} */}
                </div>
                <div className='priceOff'>
                    <span> &#8377;{price}</span>
                    <span> &#8377;{mrp}</span>
                </div>
                {/* <div className="cta">
                      <div className='add'>
                        Add To Cart
                      </div>
                </div> */}
            </Link>
  )
}

export default Product