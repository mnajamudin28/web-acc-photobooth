import React from 'react'
import logoig from '../img/logo-ig.png'
import logoshopee from '../img/logo-shopee.png'
import logotoped from '../img/logo-toped.png'

const Footer = () => {
  return (
    <div className='footer'>
      <h1>Order Now</h1>
      <div className='main-box-contact'>
        <a href="https://www.tokopedia.com/accphotobooth?source=universe&st=product"><div className='logo-contact' >
          <img src={logotoped} alt="" /> <p>Acc Photobooth</p>
        </div>
        </a>
        <a href="https://www.instagram.com/accphotobooth/">
          <div className='logo-contact'>
            <img src={logoig} alt="" /> <p>@accphotobooth</p>
          </div>
        </a>
        <a href="https://shopee.co.id/acc.photobooth">
          <div className='logo-contact'>
            <img src={logoshopee} alt="" /> <p>Acc Photobooth</p>
          </div>
        </a>
        
      </div>
      
    </div>
  )
}

export default Footer