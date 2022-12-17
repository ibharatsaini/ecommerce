
import '../styles/header.css'
import Logo from "../images/logo.png"


import {RiShoppingCartLine,RiAccountCircleLine} from "react-icons/ri"
import {FaChevronDown} from "react-icons/fa"
import {IoMdMenu} from "react-icons/io"
import Search from './Search'
import {useSelector} from 'react-redux'
import Dropdown from './Dropdown'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Header() {
//   const [show,setShow] = useState(false)
  const cartItems = useSelector(state=>state.cartItems.cartItems)
  console.log(cartItems)
  return (
    <div id="header">
        {/* <div className='bars'>
            <IoMdMenu fontSize={"20px"} />
            <Dropdown />
        </div> */}
        <Dropdown/>
        {/* <div className='logo'> */}
            <Link className='logo' to={"/search?q=parameter"}>
            <img src={Logo} />
            </Link>
        {/* </div> */}
        <div className='flex center items search'>
            <Search />
        </div>

        <div className='flex center items cate'>
            <div className="category">
                   <FaChevronDown fontSize={"10px"} />

                   Categories
            </div>
            <div className="drop">
                Categories
            </div>
        </div>
        {/* <div className='flex center items dropdown'>
            <div className="d">

                   Categories
            </div>
        </div> */}

        <div className='flex center items navLeft'>

            <Link to={"/cart"} className="cart">
                  <RiShoppingCartLine color={"#f56a6a"}  />
                 {cartItems.length>0 && <span className='num'>{cartItems.length}</span>}
            </Link>
            <div className="cart avatar">
                   <RiAccountCircleLine color={"#f56a6a"} fontSize={"25px"} />
            </div>
        </div>
    </div>
  )
}

export default Header