import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { getAllProduct } from '../../reduxStore/actions/productActions'
export default function Filters({keyword}) {
  const [forms,setForm] = useState({cod:false,min:0,max:0})
  // console.log(filters)
  const dispatch = useDispatch()
  function clear(){
       
  }
  function changeCod(){
    dispatch(getAllProduct(keyword,forms))
    // console.log(document)
    // onChildClick(!document.getElementById("cod").checked)
  }
  return (
    <div id='filters'>
      <div className='categories'>
        <h4>Categories</h4>
        <Link to="/mobiles">mobiles</Link>
        <Link to="/laptop">laptop</Link>
        <Link to="/led">Led TV</Link>
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
