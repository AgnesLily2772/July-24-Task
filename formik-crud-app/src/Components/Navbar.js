import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"
const Navbar = () => {
  
  return (
    <nav className='navbar navbar-component'>
        <h3 className='brand'>Employee Dictionary</h3>
            <ul className='navbar-right d-flex navbar-list'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/addEmployee">Add</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/">List</Link>
                </li>
            </ul>
    </nav>
  )
}

export default Navbar