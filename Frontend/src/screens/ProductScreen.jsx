import React from 'react'
import Nav from '../components/Nav.jsx'
import H_Products from '../sections/H_Products.jsx'
import Footer from '../sections/Footer.jsx'
import Subscribe from '../sections/Subscribe.jsx'

const ProductScreen = () => {
  return (
    <>
      <Nav />
      
      <section className='padding'>
        <H_Products />
      </section>

      <section className='padding'>
        <Subscribe />
      </section>

      <section className='bg-black padding'>
        <Footer />
      </section>
      
    </>
    
  )
}

export default ProductScreen