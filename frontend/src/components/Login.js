import React, { useEffect, useState } from 'react'
import {useNavigate,Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import "../styles/login.css"
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../reduxStore/actions/userActions'
function Login() {
  const dispatch = useDispatch()
  const {error,loading,isAuthenticated} = useSelector(state=>state.user)
  console.log(loading,error,isAuthenticated)
  const [login,setLogin] = useState({email:"",password:""})
  const navigate = useNavigate()

  // async function submitForm(){
  //   console.log(login)
  //   // const user = await (await fetch("/api/v1/user/login",{
  //   //     method:"POST",
  //   //     headers: {
  //   //         'Accept': 'application/json',
  //   //         'Content-Type': 'application/json'
  //   //       },
  //   //       // credentials:"include",
  //   //     body:JSON.stringify({email:login.email,password:login.password})
       
  //   // })).json()
  //   // if(user.success){
  //   //   // setTimeout(()=>{})
  //   //     toast.success("User logged in!  ")
  //   //     setTimeout(()=>{
  //   //     navigate("/"+((window.location.href.split("=")[1])||"my-account"))

  //   //     },2000)
  //   // }
  //   console.log(user)
  // }
  useEffect(()=>{
       console.log(loading)
       console.log(isAuthenticated)
        if(isAuthenticated){
          // console.log(window.location.href)
          // console.log(isAuthenticated)
          // console.log(window.location.href.split("=")[1]||"/")
            navigate("/"+(window.location.href.split("=")[1]||""))

        }
  },[dispatch,error,loading,isAuthenticated])
  function createAccount(){
    navigate("/register?redirect="+window.location.href.split("=")[1]||"/myaccount")
  }

  return (
    <div className='loginDiv'>
        <div className='formDiv'>
            <div className='email'>
              Email :
              <input required={true} type="text" value={login.email} onChange={(e)=>{setLogin(prev=>({...prev,email:e.target.value}))}} />
            </div>
            <div className='email'>
              Password :
              <input required={true} type="password" value={login.password} onChange={(e)=>{setLogin(prev=>({...prev,password:e.target.value}))}}/>
            </div>
            <Link to="/forgot-password" className='forgot'>Forget Password?</Link>
            {loading ?<div className='submit'>Loading</div> : <div className='submit' onClick={()=>dispatch(loginUser(login))}>Login</div>}
        <div onClick={()=>{createAccount()}}  className='register'>Create account</div>
        </div>

    </div>
  )
}

export default Login