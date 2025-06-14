import React, { use, useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
       console.log("LoggedIn" )
       navigate('/')
      }else{
       console.log("Logged out")
       navigate('/login')
      }
       })
  },[])

  return (
    <>
    <ToastContainer theme='dark' />
    <Routes>
      <Route path='/'  element={ <Home/>}/>
      <Route path='/login'  element={<Login/> }/>
      <Route path='/player/:id'  element={<Player/> }/>
    </Routes>
   
    </>
  )
}

export default App
