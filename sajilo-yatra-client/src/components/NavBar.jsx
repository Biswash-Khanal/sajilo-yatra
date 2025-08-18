import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav>
        <div>NavBar component</div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default NavBar