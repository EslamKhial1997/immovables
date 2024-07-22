import React from 'react'
import { Outlet } from 'react-router-dom'
import background from "../../assets/available/"
const Auth = () => {
  return (
    <div className='bg-gray-900'>
      <Outlet/>
    </div>
  )
}

export default Auth
