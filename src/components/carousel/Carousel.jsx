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

const images = [
  amazon,
  react,
  nextjs,
  nodejs,
  tailwind,
  typescript,
  wix,
  wordpress,
  docker,
  mongo_db,
  css3,
  figma,
  html5,
  js,
  react,
];

function  Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {/* We duplicate the list to make the loop seamless */}
        {[...images, ...images].map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i}`} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
