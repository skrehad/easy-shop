import React from "react";
// import "./MainSection.css";

const MainSection = () => {
  return (
    <div>
      <div className="carousel h-[400px] lg:h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img alt="" src="https://i.ibb.co/8YR9vBN/1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn   btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle  ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://i.ibb.co/pP4Pm3D/istockphoto-635790376-170667a.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle  border-white text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle  border-white text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://i.ibb.co/hY9J7pr/Computer-Accessories-banner.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle   ">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img alt="" src="https://i.ibb.co/bmfqjm4/2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle  border-white text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle  border-white text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
