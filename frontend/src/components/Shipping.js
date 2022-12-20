import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addressUpdate, placedOrder } from '../reduxStore/actions/orderActions'
import { removeCart } from '../reduxStore/actions/cartActions'
import {toast} from "react-hot-toast"
import "../styles/login.css"
import { useNavigate } from 'react-router-dom'

function Shipping() {
  const {order} = useSelector(state=>state.orderItems)
  console.log(order)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [orderDetails,setOrderDetails] = useState({
    city:"",
    state:"",
    landmark:"",
    pinCode:"",
    address:"",
    phoneNo:"",
    // orders"
  })
async function completeOrder(){

        if(!(orderDetails.city.length>0 && orderDetails.state.length>0 && orderDetails.landmark.length>0 && orderDetails.pinCode.length>0
           && orderDetails.address.length>0,orderDetails.phoneNo.length>0)){
            console.log('dd')
            return
           }
       const   abc={ shippingAddress:order.shippingAddress,shippingPrice:order.shippingPrice,orderItems:order.orderItems,
              totalPrice:order.totalPrice}
        console.log(abc)
        dispatch(placedOrder(abc))
        // dispatch(placedOrder  )
        console.log(order)


  }
  function update(name,value){
    console.log(order)
        setOrderDetails((prev)=>({
            ...prev,
            [name]:value
        }))
        console.log(orderDetails)
        dispatch(addressUpdate({shippingAddress:orderDetails}))
  }
  useEffect(()=>{

      if(order?._id){
        dispatch(removeCart())
        toast.success("Order Placed")
        setTimeout(()=>{navigate("/")},2000)
      }
},[dispatch,order])
  // console.log(orders.totalPrice?"e":"no")
  return (
    <div className="loginDiv">
          <form className='formDiv'>
            <div className='email'>
                State:
             <input type="text" required={true} value={orderDetails.state} name="state" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='email'>
                City:
             <input type="text" required={true} value={orderDetails.city}  name="city" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='email'>
                Landmark:
             <input type="text" required={true}  value={orderDetails.landmark}  name="landmark" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='email'>
                Pincode :
             <input type="text" required={true} value={orderDetails.pinCode} name="pinCode" onChange={(e)=>{update(e.target.name,e.target.value)}} />            
             </div>
             <div className='email'>
                Address:
             <input type="text" required={true} value={orderDetails.address} name="address" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='email'>
                Phone No.
             <input type="text" required={true} value={orderDetails.phoneNo} name="phoneNo" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='submit' onClick={()=>{completeOrder()}} >Order</div>
          </form>
          <div className='orderSummary'>
                <div className='ordersPrice'>Item's Price :  &#8377;<div>{order.totalPrice}</div></div>
                <div className='ordersPrice'>Shipping's Price  :  &#8377; <div>{order.shippingPrice}</div> </div>
          </div>
    </div>
  )
}

export default Shipping