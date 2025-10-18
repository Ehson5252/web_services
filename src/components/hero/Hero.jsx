import React from 'react'
import './hero.css'


import laptop from '../../assets/laptop.png'

const Hero = () => {
  return (
    <div id='home' className='hero' >

      <div className='text-block'>
        <h1>Let’s build your <span>Website</span> today</h1>
        <p>Modern, fast, and tailored to your needs — we create websites that don’t just look good, they deliver results.</p>
        <button>GET QUOTE</button>
      </div>
      <img src={laptop} alt="" />
    </div>
  )
}

export default Hero