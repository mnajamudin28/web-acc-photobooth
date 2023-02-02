import React from 'react'
import logo from '../img/Logo-new.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ImagesNR2 from '../components/ImagesNR2'

const NameRequest2 = () => {
  return (
    <div>
      <div className='header-product'>
        <img src={logo} alt="" className='logo' />
        <div className='toggle'></div>
        <ul>
          <li><Link to="/NameRequestA4">Name Request A4</Link></li>
          <li><Link to="/NameRequest1">Name Request 1</Link></li>
          <li><Link to="/PaketProps"> Paket</Link></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
      <h1 className='judul-paket'>Name Request 2</h1>
      <div className='paket-props'>
        <ImagesNR2 />

      </div>
      <Footer />
    </div>
  )
}

export default NameRequest2