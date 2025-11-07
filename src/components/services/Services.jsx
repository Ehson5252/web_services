import React from 'react'
import './services.css'


import web_design_img from '../../assets/webdesign-2.jpg'
import softwaredev from '../../assets/softwaredev.jpg';
import digitalmarket from '../../assets/digitalmarket-1.jpg';
import it_talent from '../../assets/it_consult.webp';

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
          <div>
            <button className="learn-more-btn">Learn More &gt; </button>
            <button className="service-btn">Create My Website &gt; </button>
          </div>

        </div>
             
        <div className="second-s grid-items">
          <h1>&lt;/Custom Software Development&gt;</h1>
          <p>We develop robust software using Python, Java, C#, JavaScript, React, TypeScript and PHP. Our skilled team builds high-quality, scalable web and mobile apps to drive your business forward.</p>
          <div>
            <button className="learn-more-btn">Learn More &gt; </button>
            <button className="service-btn">Start My Project &gt; </button>
          </div>
          <img src = {softwaredev} alt="" />

        </div>

        <div className="third-s grid-items">
          <img src={digitalmarket} alt="" />
          <h1>Digital Marketing & SEO</h1>
          <p>At Chai Services, we offer digital marketing and SEO services to grow your business online. Our experts use proven strategies to boost visibility, traffic, and search rankings, helping your brand reach its full potential.</p>
          <div>
            <button className="learn-more-btn">Learn More &gt; </button>
            <button className="service-btn">Grow My Business &gt; </button>
          </div>     
        </div>

        <div className="fourth-s grid-items">
          <h1>IT Talent Services</h1>
          <p>We provide tailored IT services, from permanent hires and project-based consultants to full outsourcing. We also connect IT professionals with the right job opportunities for their career growth.</p>
          <div>
            <button className="learn-more-btn">Learn More &gt; </button>
            <button className="service-btn">Request Consultation &gt; </button>
          </div>
          <img src={it_talent} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Services