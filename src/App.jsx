import React from 'react'
import Loader from './components/loader/Loader'
import Navbar from  "./components/navbar/Navbar"
import Hero from './components/hero/Hero'
import Carousel from './components/carousel/Carousel'
import Services from './components/services/Services'
import About from './components/about/About'
// import MyWork from './components/myWork/MyWork'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'

const App = () => {
  return (
    <Loader>
      <Navbar />
      <Hero />
      <Carousel />
      <Services />
      <About />
      {/* <MyWork /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <p>footer</p>
    </Loader>
  )
}

export default App