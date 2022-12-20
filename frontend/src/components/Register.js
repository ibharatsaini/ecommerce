import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/login.css"
function Register() {
    const navigate = useNavigate()
  const [userDetails,setUserDetails] = useState({
         firstName:"",
         lastName:"",
         email:"",
         password:""
  })
  console.log("console")
  function updateUser(name,value){
    // console.log(name,v)
    setUserDetails(prev=>({
        ...prev,
        [name]:value
    }))
    console.log(userDetails)
  }
  async function createAccount(){

       let user = await fetch(`/api/v1/user/create`,{
             method:"POST",
             headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
             },
             body:JSON.stringify(userDetails)
       })
       user = await user.json()
       console.log("usdf")
       console.log(user)
       if(user.success){
        console.log(user)
           navigate("/"+window.location.href.split("=")[1]||"/")
       }
  }
  return (
    <div className='loginDiv'>
        <div className='formDiv'>
            <div className='email'>
                 Firstname: 
                 <input required={true} type="text" name="firstName" value={userDetails.firstName}
                 onChange={(e)=>{updateUser(e.target.name,e.target.value)}} />
            </div>
            <div className='email'>
                 LastName: 
                 <input  required={true} type="text" name="lastName" value={userDetails.lastName}
                 onChange={(e)=>{updateUser(e.target.name,e.target.value)}} />
            </div>
            <div className='email'>
                 Email: 
                 <input required={true} type="email" name="email" value={userDetails.email}
                 onChange={(e)=>{updateUser(e.target.name,e.target.value)}} />
            </div>
            <div className='email'>
                 Password: 
                 <input required={true} type="password" name="password" value={userDetails.password}
                 onChange={(e)=>{updateUser(e.target.name,e.target.value)}} />
            </div>
            <div className='submit' onClick={createAccount}>Create Account</div>

        </div>
    </div>
  )
}

export default Register