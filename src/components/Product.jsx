import React from 'react'
import { Link } from "react-router-dom";
import Animal from '../img/paket-props/Animal.png'
import NR1 from '../img/name-request-1/NR1-001.png'
import NR2 from '../img/name-request-2/NR2001.png'
import NRA4 from '../img/name-request-a4/NRA4-001.png'


const Product = () => {
  return (
    <div>
      <div id='product'>
         <h1>Product</h1>
            <div className='kategori'>
               <h3>Kategori</h3>
                <div className='img-kategori'>
                  <div className='card-img'>
                    <Link to="/PaketProps"> <img src={Animal} alt="" /> </Link>
                    <h4>Paket Props</h4>
                  </div>
                  <div className='card-img'>
                    <Link to="/NameRequest1"><img src={NR1} alt="" /></Link>
                    <h4>Name Request 1</h4>
                  </div>
                  <div className='card-img'>
                    <Link to="/NameRequest2"><img src={NR2} alt="" /></Link>
                    <h4>Name Request 2</h4>
                  </div>
                  <div className='card-img'>
                    <Link to="/NameRequestA4"><img src={NRA4} alt="" /></Link>
                    <h4>Name Request A4</h4>
                  </div>
                </div>
            </div>
            
      </div>
    </div>
  )
}

export default Product