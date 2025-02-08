import React from 'react'
import Nav from '../components/Nav'
import { Footer } from '../sections'
import AboutInfo from '../sections/AboutInfo'

const AboutUs = () => {
  return (
    <>
        <Nav />

        <section className='padding mt-4'>
            <AboutInfo />
        </section>


        <section className='bg-black padding'>
            <Footer />
        </section>
    </>
  )
}

export default AboutUs