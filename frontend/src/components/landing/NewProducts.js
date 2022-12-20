import React from 'react'
import "../../styles/newproduct.css"
import Product from './Product'
function NewProducts() {
  return (
    <div id="newProducts">
        <h2>New Products</h2>
        <div className='allProducts'>
            <Product img="https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8xNTkyNS04Ny0x.jpg"
                    id={"6387e1cfbc4a132657975557"}   price={56999} mrp={56999} star={4} name={"Apple iPhone 11"} />
            <Product img="https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8xNjIwMS00OS0x.jpg"
                     id="6387e1d9bc4a13265797569b" price={11955} mrp={8999} star={"4"} name="realme 5i" />

            <Product img="https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8xNjc2MS02Ny0x.jpg"
                      id="6387e1d9bc4a1326579756a4" price={21999} mrp={21999} star={"3"} name="realme 7 pro" />
            <Product img="https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8xNjQ2MS0zMy0x.jpg"
                       id={"6387e1d9bc4a1326579756a7"} price={15289} mrp={17000} star={"4.2"} name="realme 7" />
            <Product img="https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8xNzE5MS0yNTMtMQ.jpg"
                       id="6387e1e1bc4a1326579757b8" price={11999} mrp={11999} star={2} name="xiaomi redmi 9 power" />
            <Product img="https://images-api.datayuge.in/image/dHI6dy0xNDAwLGgtMTQwMCxjLWF0X21heC8xNTY1OC01OS0x.jpg" 
                       id="6387e1e1bc4a1326579757ca" price={26999} mrp={28000} star={"3.5"} name={"Xiaomi Redmi K20"} />
            
        </div>
    </div>
  )
}

export default NewProducts