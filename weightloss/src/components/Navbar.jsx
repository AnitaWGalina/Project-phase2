import React from 'react'
import { MenuData } from './MenuData'
import "./Navbar.css"
const Navbar = () => {
    state = {clicked: false};
    function handleClick () {
        this.setState({clicked: !this.state.clicked})
    }
  return (
    <div>
      <nav className='Navbar'>
        <h1 className='logo'><i className='fab fa-react'></i>Nutrition For Weight Loss </h1>
        <div className='menu-icons' onClick={this/handleClick}>
            <i className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
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
