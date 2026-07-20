import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex  justify-between p-4'>
            <h1>logo</h1>
            <div className='flex gap-4 '>
                <NavLink to={'/dashboard'}> Home
                </NavLink>
                <NavLink to={'/dashboard/about'}> About
                </NavLink>
                <NavLink to={'/dashboard/contact'}> contact
                </NavLink>
            </div>
            <button>login</button>
        </div>

    )
}

export default Navbar