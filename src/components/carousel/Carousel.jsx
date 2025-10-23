import React from "react";
import "./carousel.css";

import amazon from '../../assets/carousel/amazon_icon.png';
import css3 from '../../assets/carousel/css3_icon.png';
import docker from '../../assets/carousel/docker_icon.png';
import figma from '../../assets/carousel/figma_icon.png';
import html5 from '../../assets/carousel/html5_icon.png';
import js from '../../assets/carousel/js_icon.png';
import mongo_db from '../../assets/carousel/mongo_db_icon.png';
import nextjs from '../../assets/carousel/nextjs_icon.png';
import nodejs from '../../assets/carousel/node_js_icon.png';
import react from '../../assets/carousel/react_icon.png';
import tailwind from '../../assets/carousel/tailwind_icon.png';
import typescript from '../../assets/carousel/typescript_icon.png';
import wix from '../../assets/carousel/wix_icon.png';
import wordpress from '../../assets/carousel/wordpress_icon.png';

const techs = {
  // amazon: amazon,
  React: react,
  Next: nextjs,
  Amazon: amazon,
  Node: nodejs,
  Tailwind: tailwind,
  Typescript: typescript,
  Wix: wix,
  Wordpress: wordpress,
  Docker: docker,
  MongoDB: mongo_db,
  CSS3: css3,
  Figma: figma,
  HTML5: html5,
  JavaScript: js,
  React: react,
};

function  Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {/* We duplicate the list to make the loop seamless */}
        {Object.entries(techs).map(([key, value]) => 
        <div className="carousel-item">
          <img key={key} src={value} alt={key} />
          <p>{key}</p>
        </div>)}

      </div>
    </div>
  );
}

export default Carousel;
