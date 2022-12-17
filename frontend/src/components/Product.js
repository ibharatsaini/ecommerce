import React from 'react'
import {Link} from 'react-router-dom'
import {BsFillStarFill} from "react-icons/bs"
export default function Product({id,images,name,price,mrp,specs,rating}) {
    const percentOff = 100- Math.floor(price * 100/mrp)
    console.log(percentOff , mrp,price)
  
    return (
      <Link className="product" to={`/product/${id}`}>
          <div className='imageCls'>
              <img src={images}></img>
          </div>
          <div className='heading'>
              <h4>{name}</h4>
              <span className='review'>{Math.floor(rating)} <BsFillStarFill color={"lightgoldenrodyellow"}/></span>
              <div className='specs'>
                  <ul>
                  {specs.map(spec=><li>{spec}</li>)}
                  </ul>
              </div>
          </div>
          <div className='priceDiv'>
            <span className='price'> &#8377;{price}</span>
            <span className='mrp'>&#8377;{mrp} </span><insert>{`${percentOff}% Off`}</insert>
          </div>
      </Link>
    )
}
