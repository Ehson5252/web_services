import React from 'react'
import Navbar from  "./components/navbar/Navbar"
import Hero from './components/hero/Hero'
import Loader from './components/loader/Loader'
// import About from './components/about/About'
// import Services from './components/services/Services'
// import MyWork from './components/myWork/MyWork'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'

const App = () => {
  return (
    <Loader>
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <MyWork /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </Loader>
  )
}

export default App