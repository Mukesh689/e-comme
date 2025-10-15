import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'


const Rootlayout = () => {
  return (
    <div>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default Rootlayout
