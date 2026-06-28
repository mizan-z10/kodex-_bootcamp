import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center px-2 py-2 bg-gray-200'>
            <h1>logo</h1>
            <div className='flex gap-4'>
               <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'} to='/'>Home</NavLink>
               <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'} to='/about'>About</NavLink>
               <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'} to='/contact'>Contact</NavLink>
               <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'} to='/product'>Product</NavLink>
            </div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
        </nav>
        

    </div>
  )
}

export default Navbar