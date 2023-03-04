import React from 'react'
import logo from '../img/Logo-new.png'
import Footer from '../components/Footer'
import '../css/PaketProps.css'
import ImagesNR1 from '../components/ImagesNR1'
import { Link } from 'react-router-dom'


const NameRequest1 = () => {
  return (
    <div>
        <div className='header-product'>
           <a href="/"><img src={logo} alt="" className='logo' /></a>
           <div className='toggle'></div>
           <ul>
              <li><Link to="/NameRequestA4">Name Request A4</Link></li>
              <li><Link to="/NameRequest2">Name Request 2</Link></li>
              <li><Link to="/PaketProps"> Paket</Link></li>
              <li><a href="/">Home</a></li>
           </ul>
        </div>

        <h1 className='judul-paket'>Name Request 1</h1>
        <div className='paket-props'>
           <ImagesNR1/>

        </div>
        <Footer />
    </div>
  )
}

export default NameRequest1