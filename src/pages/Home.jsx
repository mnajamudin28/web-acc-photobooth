import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HowToOrder from '../components/HowToOrder'
import MainBanner from '../components/MainBanner'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <HowToOrder />
      <Product />
      <Footer />
    </div>
  )
}

export default Home