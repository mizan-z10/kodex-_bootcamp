import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
   <>
   <nav className="flex justify-between items-center p-4 bg-gray-800 text-white text-lg ">
    <div>logo</div>
    <div className="flex gap-4">
        <NavLink className={({isActive})=>isActive ? 'text-black text-shadow-black font-extrabold':""} to={"/"}>Home</NavLink>
        <NavLink className={({isActive})=>isActive ? 'text-black text-shadow-black font-extrabold':""} to={"/cart"}>Cart</NavLink>
    </div>
    <button className='rounded-2xl border-2 p-1 '>Login</button>
    
   </nav>
   </>
  )
}

export default Navbar