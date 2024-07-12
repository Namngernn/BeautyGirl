import React from 'react'
import { Outlet } from 'react-router-dom'
import '.././App.css'

const Navbar = () => {
  return (
    <div>
        <nav className='text-center p-4 shadow-sm shadow-black-100'>
          BeautyGirl
        </nav>
        {/* form react router dom at in rounter.jsx*/}
        <Outlet/>
    </div>
  )
}

export default Navbar;