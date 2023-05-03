import { useState } from 'react'
import React from 'react'
import { MenuData } from './MenuData'
import "./Navbar.css"

const Navbar = () => {
    const[state,setState]=useState(false)
    
    const handleClick = () =>{
        setState(!state) 
    }
  return (
    <div>
      <nav className='Navbar'>
        <h1 className='logo'><i className='fab fa-react'></i>Diet Generator </h1>
        <div className='menu-icons' onClick={handleClick}>
            <i className= {state? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className='nav-menu'>
            {MenuData.map((item, index)=> {
                return (
                    <li key={index}>
                <a href= {item.url} className={item.cName}>
                    <i className={item.icon}></i>{item.title}
                </a>
            </li>
                )
            })}
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
