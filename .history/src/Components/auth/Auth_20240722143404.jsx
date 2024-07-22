import React from 'react'
import { Outlet } from 'react-router-dom'
import background from "../../assets/available/image6.jpg"
const Auth = () => {
  return (
    <div style={{ 
        backgroundImage: `url(${background})`,  
        height: "100vh", backgroundRepeat: "no-repeat"
      }}>
      <Outlet/>
    </div>
  )
}

export default Auth