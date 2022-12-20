import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link, useParams} from "react-router-dom"
import { getAllProduct } from '../../reduxStore/actions/productActions'
export default function Filters({keyword}) {
  const [forms,setForm] = useState({cod:false,min:0,max:0})
  // console.log(filters)
  const dispatch = useDispatch()
  function clear(){
       
  }
  const {category} = useParams()
  function changeCod(){
    if(!category){
      console.log('windo')
      dispatch(getAllProduct(keyword,forms))
    }else{
      console.log(forms)
      dispatch(getAllProduct('',forms,1,window.location.href.split("category/")[1]))
    }
    // dispatch(getAllProduct(keyword,forms))

    // console.log(document)
    // onChildClick(!document.getElementById("cod").checked)
  }
  return (
    <div id='filters'>
      <div className='categories'>
        <h4>Categories</h4>
        <Link to="/category/mobile">mobiles</Link>
        <Link to="/category/laptop">laptop</Link>
        <Link to="/category/led">Led TV</Link>
        <Link to="/category/headphone">Headphone</Link>
        <Link to="/category/monitor">Monitor</Link>

        {/* <Link to="/">mobiles</Link> */}
      </div>
      {/* <div onClick={()=>changeCod()} className='cod'> */}
      <div className='categories'>
        <h4>Filters<span id="clear" onClick={clear}>clear</span></h4>
        <div className='cod'>
       <input type="checkbox" value={forms.cod} name='cod' onChange={(e)=>{setForm(prev=>({...prev,cod:!prev.cod}))}} /><span>COD</span>
       </div>
       {/* <label for="cod" onClick={changeCod}>COD</label> */}
       <div className='cod'>
       <input type="text" name='min' value={forms.min} onChange={(e)=>{setForm(prev=>({...prev,min:e.target.value}))}}></input><span>Min</span>
       </div>
       <div className='cod'>
       <input type="text" name='max' id="max" value={forms.max} onChange={(e)=>{setForm(prev=>({...prev,max:e.target.value}))}}></input><span>Max</span>
       </div>
       <div className='apply' onClick={changeCod}>Apply Filters</div>


       {/* <label for="min">min</label> */}
       </div>
       {/* </div> */}
    </div>
  )
} 
