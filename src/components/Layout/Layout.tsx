import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import About from '../About'
import Services from '../Services'
import Footer from '../Footer'

const Layout = () => {

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </React.Fragment>
  )
}

export default Layout