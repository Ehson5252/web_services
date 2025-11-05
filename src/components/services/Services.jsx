import React from 'react'
import './services.css'
import web_design_img from '../../assets/webdesign-2.jpg'
import softwaredev from '../../assets/softwaredev.jpg';


const Services = () => {
  return (
    <div className="services section">

      
      <div className="services-text">
        <h2 className="title">Services</h2>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>


      <div className="services-main-content">
        <div className="first-s grid-items">
          <img src={web_design_img} alt="" />
          <h1 className="biggest-text">WEB DESIGN</h1>
          <p>Chai Services creates responsive, user-friendly websites on platforms like WordPress, Shopify, Wix, Squarespace, and Joomla. We design visually appealing sites that engage users and bring your vision to life.</p>
          <button className="btn">Learn More &gt; </button>
        </div>
             
        <div className="second-s grid-items">
          <h1>Custom Software Development</h1>
          <p>At Chai Services, we provide robust software development using Python, Java, C#, JavaScript, and PHP. Our team delivers customized, high-quality solutions, including scalable web applications and Android/iOS mobile apps, driving your business forward.</p>
          <button className="btn">Learn More &gt; </button>
          <img src = {softwaredev} alt="" />

        </div>

        <div className="third-s grid-items">
          <h3>Digital Marketing & SEO</h3>
        </div>

        <div className="fourth-s grid-items">
          <h3>IT Talent Services</h3>
        </div>
      </div>


    </div>
  )
}

export default Services