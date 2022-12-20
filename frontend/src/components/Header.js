
import '../styles/header.css'
import Logo from "../images/logo.png"
import {RiShoppingCartLine,RiAccountCircleLine} from "react-icons/ri"
import {FaChevronDown} from "react-icons/fa"
import Search from './Search'
import {useDispatch, useSelector} from 'react-redux'
import Dropdown from './Dropdown'
import { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../reduxStore/actions/userActions'
function Header() {
  const [show,setShow] = useState(false)
  const [log,setLog] = useState(false)
  const cartItems = useSelector(state=>state.cartItems.cartItems)
  const dispatch = useDispatch()
  const {isAuthenticated,user} = useSelector(state=>state.user)
  useEffect(()=>{
    function handleChange(){
        if(window.innerWidth>1050){
            document.querySelector(".mainCls").style.display = 'flex'
        }
    }
    window.addEventListener('resize',handleChange)
    return ()=>window.removeEventListener("resize",handleChange)

  },[])
  function logout(){
    setLog(false)
    dispatch(logoutUser())
  }
  console.log(cartItems)
  return (
    <div id="header">
        {/* <div className='bars'>
            <IoMdMenu fontSize={"20px"} />
            <Dropdown />
        </div> */}
        <Dropdown />
        {/* <div className='logo'> */}
            <Link className='logo' to={"/"}>
            <img src={Logo} />
            </Link>
        {/* </div> */}
        <div className='flex center items search'>
            <Search />
        </div>

        <div className='flex center items cate'>
            <div onClick={()=>setShow(!show)} className="category">
                   <FaChevronDown fontSize={"10px"} />

                   Categories
            </div>
         {show&&   <div className="drop">
                <Link onClick={()=>setShow(false)} to="/category/mobile">mobiles</Link>
            <Link onClick={()=>setShow(false)} to="/category/laptop">laptop</Link>
            <Link onClick={()=>setShow(false)} to="/category/led">Led TV</Link>
            <Link onClick={()=>setShow(false)} to="/category/headphone">Headphone</Link>
            <Link onClick={()=>setShow(false)} to="/category/monitor">Monitor</Link>
            </div>}
        </div>
        {/* <div className='flex center items dropdown'>
            <div className="d">

                   Categories
            </div>
        </div> */}

        <div className='flex center items navLeft checkCart'>

            <Link to={"/cart"} className="cart">
                  <RiShoppingCartLine color={"#f56a6a"}  />
                 {cartItems.length>0 && <span className='num'>{cartItems.length}</span>}
            </Link>
         { !isAuthenticated ?(<Link id='join' to='/login'>LOG IN</Link> ): ( <div onClick={()=>setLog(!log)} className="cart avatar">
                   <RiAccountCircleLine color={"#f56a6a"} fontSize={"25px"} />
                 {log &&  <div style={{width:"100px",fontSize:"18px",padding:"4px",cursor:"pointer"}} className='drop'>
                     <span onClick={logout} >Logout</span>
                   </div>}
            </div>)}
        </div>
    </div>
  )
}

export default Header