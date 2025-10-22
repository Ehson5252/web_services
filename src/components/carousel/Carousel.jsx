import React from "react";
import "./carousel.css";

const images = [
  "https://picsum.photos/id/1015/400/250",
  "https://picsum.photos/id/1016/400/250",
  "https://picsum.photos/id/1018/400/250",
  "https://picsum.photos/id/1020/400/250",
  "https://picsum.photos/id/1024/400/250",
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
