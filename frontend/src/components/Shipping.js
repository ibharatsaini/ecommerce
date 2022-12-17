import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addressUpdate, placedOrder } from '../reduxStore/actions/orderActions'
import { removeCart } from '../reduxStore/actions/cartActions'
import {toast} from "react-hot-toast"
import "../styles/login.css"
import { useNavigate } from 'react-router-dom'
import { FaToiletPaperSlash } from 'react-icons/fa'
import axios from "axios"
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
  // dispatch(addressUpdate({...orderDetails}))
    // console.log(orderItems,shippingAddress,totalPrice,shippingPrice)
    // console.log(cartItems.images[0])
    //   co
    // console.o
    //  dispatch(addressUpdate({...orderDetails}))
      // hen(d=>{
        //  console.log(d);
        // console.log(order)
       const   abc={ shippingAddress:order.shippingAddress,shippingPrice:order.shippingPrice,orderItems:order.orderItems,
              totalPrice:order.totalPrice}
        console.log(abc)
        dispatch(placedOrder(abc))
        // dispatch(placedOrder  )
        console.log(order)
      // const data = await (await fetch("http://localhost:8000/api/v1/order/create",{
      //     method:"POST",
      //     headers:{
      //       "Accept":"application/json",
      //       "Content-Type":"application/json"
      //     },
      //     credentials:'include',
      //     body: JSON.stringify(orders)
      //   })).json()
      // const data = await(await fetch("/api/v1/order/create",{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json", 
      //   },
      //   body: JSON.stringify(orders)
      // })).json()

      // if(data.success) {
      //   dispatch(removeCart())
      //     toast.success("Order Placed!")
      //     setTimeout(()=>{
      //            navigate("/")
      //     },3000)
      // }
   
      // }
      // )

    //   console.log(name,price,quantity)
    //  let orderDetails=[];
    //  cartItems.forEach(item => {
    //     console.log(orderDetails)
    //     setOrderDetails(prev=>({
    //         ...prev,
    //         // orderItems:prev.orderItems.push({name:item.name,product:item._id,image:item.images[0],price:item.price,quantity:item.quantity})
    //     }))
    //     console.log(orderDetails)
    //     //   orderDetails.orderItems.push({name:item.name,product:item._id,image:item.images[0],price:item.price,quantity:item.quantity})
    //  });
    //   setOrderDetails(prev=>({
    //     ...prev,
    //     // orderDetails
    //   }))

      // console.log(orderDetails)

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
          <div className='formDiv'>
            <div className='email'>
                State:
             <input type="text" required value={orderDetails.state} name="state" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='email'>
                City:
             <input type="text" required value={orderDetails.city}  name="city" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='email'>
                Landmark:
             <input type="text" required  value={orderDetails.landmark}  name="landmark" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='email'>
                Pincode :
             <input type="text" required value={orderDetails.pinCode} name="pinCode" onChange={(e)=>{update(e.target.name,e.target.value)}} />            
             </div>
             <div className='email'>
                Address:
             <input type="text" required value={orderDetails.address} name="address" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='email'>
                Phone No.
             <input type="text" required value={orderDetails.phoneNo} name="phoneNo" onChange={(e)=>{update(e.target.name,e.target.value)}} />
             </div>
             <div className='submit' onClick={()=>{completeOrder()}} >Order</div>
          </div>
          <div className='orderSummary'>
                <div className='ordersPrice'>Item's Price :  &#8377;<div>{order.totalPrice}</div></div>
                <div className='ordersPrice'>Shipping's Price  :  &#8377; <div>{order.shippingPrice}</div> </div>
          </div>
    </div>
  )
}

export default Shipping