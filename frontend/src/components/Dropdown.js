import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'

export default function Dropdown() {
  const [show,setShow] = useState(false)
  function showDiv(){
    let search = document.querySelector("#filters")
    let mainCl = document.querySelector(".mainCls")
    if(show ){
       search.style.display = 'none'
       mainCl.style.display= 'flex'
      }else{
         search.style.display = 'flex'
       mainCl.style.display= 'none'

      }
    setShow(prev=>!prev)
  }
  return (
    <div className='bars' onClick={showDiv}>
            <IoMdMenu fontSize={"20px"} />
            
  {/* { show && ( <div className="dropdown">
        <div className="heading">Categories</div>
        <div className="menu">mobile</div>
        <div className="menu">technology</div>
        <div className="heading">Account</div>
        <div className="menu">Log out</div>
    </div>)} */}
    </div>
  )
}
