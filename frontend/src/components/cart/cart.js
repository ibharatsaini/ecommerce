import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateCart,deleteCart,deleteItem} from "../../reduxStore/actions/cartActions"
import { addressUpdate,itemUpdate } from '../../reduxStore/actions/orderActions'
import { useNavigate}from "react-router-dom"
import "../../styles/cart.css"
function Cart() {
  console.log("Cart")
  const {cartItems }= useSelector(state=>state.cartItems)
  // const orderIte
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(cartItems)
  function deleting(id){
     dispatch(deleteItem(id))
     console.log(cartItems)
  }
 
  if(!cartItems.length>0) return (<div>No cart</div>)
  let totalAmt=0
  cartItems.forEach((item,i) => {
    //    totalAmt
       totalAmt+=item.price *item.quantity
  });
  console.log(totalAmt)
  const gst = Math.floor(totalAmt*(18/100))
  const shippingPrice = 120
  const totalPrice = totalAmt+gst+shippingPrice
  console.log(totalPrice)
  function buyNow(){
    console.log("slkdjf")
    const orderItems=[]
    console.log(cartItems)
    cartItems.map(item=>{
      orderItems.push({name:item.name,product:item._id,image:item.images[0],price:item.price,quantity:item.quantity})
    })
    console.log(orderItems)
    const data = {totalPrice,shippingPrice,orderItems}
    console.log(data)
    // console.log(navigate("/login?redirect=shipping"))
    dispatch(itemUpdate({...data}))
    // console.log()
    navigate("/login?redirect=shipping")

  }
  return (
    <div id='cartDiv'>
    {cartItems.map(item=>(
    <div className="prodDiv bor">
        <div className='prodImage'>
            <img src={item.images[0]} />
        </div>
        <div className='prodTitle'>
             <div className='titleDiv'> <h3>{item.name}</h3></div>
        </div>
             
        <div className='deleteDiv'>
            <div className='qty'>
                <div className='minus' onClick={()=>{item.quantity>1&&dispatch(deleteCart({...item}))}}>-</div>
                <div className='number'>{item.quantity}</div>
                <div className='minus' onClick={()=>{dispatch(updateCart({...item}))}}>+</div>
            </div>
            <div className='delete' onClick={()=>{deleting(item._id)}} >Delete</div>
            </div> 
        <div className='prodPrice'>
            <h4>{item.price}</h4>
          </div>
        
        
    </div>
    
    ))}
    <div className='prod'>
    <div className='totalDiv'>
       <div className='chi'> Amount : <div className='amount'>{totalAmt}</div></div> 
        <div className='chi'>GST: <div className='amount'>{gst}</div></div>
        <div className='chi final'>Shipping Amount: <div className='amount'>{shippingPrice}</div></div>
        <div className='chi'><div className='amount'>{totalPrice}</div></div>
        <div className='buyNow' onClick={()=>{buyNow()}}>Place Order</div>
    </div>
    </div>
    </div>  
  )
}

export default Cart