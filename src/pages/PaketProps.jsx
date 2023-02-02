import React from 'react'
import logo from '../img/Logo-new.png'
import Footer from '../components/Footer'
import '../css/PaketProps.css'
import ImagesPaket from '../components/ImagesPaket'
import { Link } from 'react-router-dom'


const PaketProps = () => {
  return (
    <div>
      <div className='header-product'>
        <img src={logo} alt="" className='logo' />
        <div className='toggle'></div>
        <ul>
          <li><Link to="/NameRequestA4">Name Request A4</Link></li>
          <li><Link to="/NameRequest2">Name Request 2</Link></li>
          <li><Link to="/NameRequest1">Name Request 1</Link></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>

      <h1 className='judul-paket'>Paket props</h1>
      <div className='paket-props'>
          <ImagesPaket />
      </div>
      <Footer />
    </div>
  )
}

export default PaketProps