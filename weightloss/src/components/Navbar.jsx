import React from 'react'
import { MenuData } from './MenuData'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav className='Navbar'>
        <h1 className='logo'><i className='fab fa-react'></i>Nutrition For Weight Loss </h1>
        <ul>
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
