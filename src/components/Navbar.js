/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark p-4 sticky-navbar">
        <div className="container-fluid">
          <div className='navheading' >
            <a className="navbar-brand"><b>H a r i s J.</b></a>
          </div>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse content" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Button variant="" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',transform: 'scale(1)',transition: 'all 0.3s ease-in-out',position: 'relative',color: '#4CAF50',}}onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#4CAF50';e.currentTarget.style.transform = 'scale(1.1)';e.currentTarget.style.color = '#ffffff';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent';e.currentTarget.style.transform = 'scale(1)';e.currentTarget.style.color = '#4CAF50';}}><b>Home</b></Button>
              </li>
              <li className="nav-item">
              <Button variant="" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',transform: 'scale(1)',transition: 'all 0.3s ease-in-out',position: 'relative',color: '#4CAF50',}}onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#4CAF50';e.currentTarget.style.transform = 'scale(1.1)';e.currentTarget.style.color = '#ffffff';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent';e.currentTarget.style.transform = 'scale(1)';e.currentTarget.style.color = '#4CAF50';}}><b>Services</b></Button>
              </li>
              <li className="nav-item">
              <Button variant="" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',transform: 'scale(1)',transition: 'all 0.3s ease-in-out',position: 'relative',color: '#4CAF50',}}onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#4CAF50';e.currentTarget.style.transform = 'scale(1.1)';e.currentTarget.style.color = '#ffffff';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent';e.currentTarget.style.transform = 'scale(1)';e.currentTarget.style.color = '#4CAF50';}}><b>Experience</b></Button>
              </li>
              <li className="nav-item">
              <Button variant="" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',transform: 'scale(1)',transition: 'all 0.3s ease-in-out',position: 'relative',color: '#4CAF50',}}onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#4CAF50';e.currentTarget.style.transform = 'scale(1.1)';e.currentTarget.style.color = '#ffffff';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent';e.currentTarget.style.transform = 'scale(1)';e.currentTarget.style.color = '#4CAF50';}}><b>Projects</b></Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
