import React from 'react'
import logo from '../img/Logo-new.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import IamgesNRA4 from '../components/IamgesNRA4'

const NameRequestA4 = () => {
  return (
    <div>
      <div className='header-product'>
        <a href="/"><img src={logo} alt="" className='logo' /></a>
        <div className='toggle'></div>
        <ul>
          <li><Link to="/NameRequest2">Name Request 2</Link></li>
          <li><Link to="/NameRequest1">Name Request 1</Link></li>
          <li><Link to="/PaketProps"> Paket</Link></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
      <h1 className='judul-paket'>Name Request A4</h1>
      <div className='paket-props'>
        <IamgesNRA4 />

      </div>
      <Footer />
    </div>
  )
}

export default NameRequestA4