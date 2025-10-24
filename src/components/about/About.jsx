import React from "react";
import './about.css';
import '../../global.css';


import group from '../../assets/group.jpg';
import softwaredev from '../../assets/softwaredev.jpg';

const About = () => {
  return (
    <div className="about">
      <h2 className="title">About Us</h2>
      <div className="main-content">

        <div className="img-block">
          <img src={group} alt="" />
          <img src={softwaredev} alt="" />
        </div>

        <div className="text-block">
         <h1 className="biggest-text">Enjoy <span>Full-Service</span> Digital Marketing Expertise</h1>
        </div>

      </div>
    </div>
    )
}

export default About;