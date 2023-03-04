import React from 'react'
import logo from '../img/Logo-new.png'
import logoProduct from '../img/bag.png'
import logoHTO from '../img/shop-two.png'
import logoHome from '../img/home.png'

const Header = () => {
  return (
    <div className='header'>
      <a href="/"><img src={logo} alt="" className='logo' /></a>
      <div className='toggle'></div>
      <ul className='menu-web'>
        <li><a href="#product">Product</a></li>
        <li><a href="#HowToOrder">How To Order</a></li>
        <li><a href="/">Home</a></li>
      </ul>
      <ul className='menu-mobile'>
        <li><a href="/"><img src={logoHome} alt="" /></a></li>
        <li><a href="#HowToOrder"><img src={logoHTO} alt="" /></a></li>
        <li><a href="#product"><img src={logoProduct} alt="" /></a></li>
      </ul>
    </div>
    
  )
}

export default Header