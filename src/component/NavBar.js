import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

const NavBar = ({handleSearch}) => {
  return (
      <div className="navbbar">
          <h1> تفرج </h1>
          <div className='menu'>
            <Link to={"/"}><h1>Movie</h1></Link>
            <Link to={"/about"}><h1>About</h1></Link>
            <Link to={"/contact"}><h1>Contact</h1></Link>
          </div>
          <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
  )
}

export default NavBar