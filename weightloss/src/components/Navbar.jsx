import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='Navbar'>
        <h1>Our Navbar <i className='fab fa-react'></i></h1>
        <ul>
            <li>
                <a href= "index.html">
                    <i className='fa-solid fa-house-user'></i>Home
                </a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
