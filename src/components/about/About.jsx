import React from "react";
import './about.css';
import '../../global.css';


import group from '../../assets/group.jpg';
import softwaredev from '../../assets/softwaredev.jpg';

const About = () => {
  return (
    <div className="about section">
      <h2 className="title">About Us</h2>
      <div className="about-main-content">

        <div className="about-img-block">
          <img src={softwaredev} alt="" />
          <img src={group} alt="" />
          
        </div>

        <div className="about-text-block">
         <h1 className="biggest-text">Enjoy <span>Full-Service</span> Digital Marketing Expertise</h1>
        </div>

      </div>
    </div>
    )
}

export default About;