import React, { useEffect, useState } from "react";
import "./MainSection.css";

const MainSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://i.ibb.co/LgDCHgZ/what-gaming-computer-accessories-needed-5233-1663994276529-1.webp",
    "https://i.ibb.co/pP4Pm3D/istockphoto-635790376-170667a.jpg",
    "https://i.ibb.co/hY9J7pr/Computer-Accessories-banner.jpg",
    "https://i.ibb.co/bmfqjm4/2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div>
      <div className="carousel h-[400px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
