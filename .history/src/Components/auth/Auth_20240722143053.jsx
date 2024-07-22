import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='bg-gray'>
      <Outlet/>
    </div>
  )
}

export default Auth
