import React from 'react'
import "../../styles/newproduct.css"
import Product from './Product'
function NewProducts() {
  return (
    <div id="newProducts">
        <h2>New Products</h2>
        <div className='allProducts'>
            <Product />
            <Product />

            <Product />
            <Product />
            <Product />
            <Product />
            
        </div>
    </div>
  )
}

export default NewProducts