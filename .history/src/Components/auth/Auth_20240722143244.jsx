import React from 'react'
import { Outlet } from 'react-router-dom'
import background from "../../assets/available/image6.jpg"
const Auth = () => {
  return (
    <div style={{ 
        backgroundImage: 'url("', 
        height: "300px", backgroundRepeat: "no-repeat"
      }}>
      <Outlet/>
    </div>
  )
}

export default Auth
