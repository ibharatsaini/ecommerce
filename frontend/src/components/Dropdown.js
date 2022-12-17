import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'

export default function Dropdown() {
  const [show,setShow] = useState(false)
  return (
    <div className='bars' onClick={()=>setShow(!show)}>
            <IoMdMenu fontSize={"20px"} />
            
  { show && ( <div className="dropdown">
        <div className="heading">Categories</div>
        <div className="menu">mobile</div>
        <div className="menu">technology</div>
        <div className="heading">Account</div>
        <div className="menu">Log out</div>
    </div>)}
    </div>
  )
}
