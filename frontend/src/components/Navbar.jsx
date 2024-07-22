import React from 'react'
import { Outlet } from 'react-router-dom'
import '.././App.css'

const Navbar = () => {
  return (
    <div>
        <nav className='text-center w-full h-50 fixed top-0 left-0 flex items-center justify-center' style={{backgroundColor: '#e58799'}}>
        BeautyGirl
        </nav>
        {/* form react router dom at in rounter.jsx*/}
        <Outlet/>
    </div>
  )
}

export default Navbar;