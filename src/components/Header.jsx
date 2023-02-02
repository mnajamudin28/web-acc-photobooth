import React from 'react'
import logo from '../img/Logo-new.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo' />
      <div className='toggle'></div>
      <ul>
        <li><a href="#product">Product</a></li>
        <li><a href="#HowToOrder">How To Order</a></li>
        <li><a href="/">Home</a></li>
      </ul>
    </div>
    
  )
}

export default Header