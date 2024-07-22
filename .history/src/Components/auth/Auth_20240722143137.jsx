import React from 'react'
import { Outlet } from 'react-router-dom'
import background from "../../assets/available/image6.jpg"
const Auth = () => {
  return (
    <div style={{backgroundImage}}>
      <Outlet/>
    </div>
  )
}

export default Auth
