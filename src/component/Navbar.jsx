import React, { useState } from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import sky from"../Image/sky.png"
export const Navbar = () => {
    const[menuOpen, setOpen]=useState(false)
  return (
   <nav>
    <Link to="/" className='title'><img src={sky}/></Link>
    <div className='menu' onClick={()=> setOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul className={menuOpen ? "open":""}>
        <li>
            <NavLink to="/home">Home</NavLink>
            </li>
        <li>
        <NavLink to="/jobs">Jobs</NavLink></li>
        <li>
        <NavLink to="/contact">Contact</NavLink></li>
    </ul>
    
   </nav>
  )
}
