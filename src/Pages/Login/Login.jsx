import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { login, signup } from '../../Firebase' 
import NETFLIX_Spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState,setSignState] = useState('Sign In')
 const [name,setname] = useState("")
 const [email,setemail] = useState("")
 const [Password,setpassword] = useState("")
 const [loading,setloading] = useState(false)
 const user_auth = async(event)=>{
event.preventDefault()
setloading(true)
  if(signState=="Sign In"){
      await login(email,Password)
  }else{
    await signup(name,email,Password)
  }
  setloading(false)
 }
 return (
  loading?<div className="loading-spainner">
    <img src={NETFLIX_Spinner} alt="" />
    </div>:<div className='login'>
      <img src={Logo} className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState=='Sign Up'? <input onChange={(e)=> setname(e.target.value)}
          type="text" value={name} placeholder='Your Name' name="" id="" />:<></>}
         
          <input
          value={email}
          onChange={(e)=>
            setemail(e.target.value)
          }
          type="Email" placeholder=' Email' name="" id="" />
          <input
          value={Password}
          onChange={(e)=>
            setpassword(e.target.value)
          }
          type="Password" placeholder=' Password' name="" id="" />
         <button onClick={user_auth} type='submit'> {signState} </button>
         <div className="form-help">
          <div className="remember">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
         </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}} >Sign Up Now</span></p>: <p>Already Have Account <span onClick={()=>{setSignState("Sign In")}}>Sign Ip Now</span></p>}
         

        </div>
      </div>
    </div>
  )
}

export default Login
