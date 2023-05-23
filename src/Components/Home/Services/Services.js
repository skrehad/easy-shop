import React from "react";

const Services = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold font-mono mt-2 mb-6 text-[#ff3633]">
        Our Services
      </h2>
      <div className="bg-white rounded-lg grid lg:grid-cols-2">
        <div className=" p-5 lg:border-r lg:p-10">
          <p className="text-lg  font-mono">
            We offer a wide selection of computer accessories, including
            keyboards, mice, monitors, speakers, cables, and more. Whether you
            need a specific component or a complete setup, we have you
            covered.We prioritize quality and reliability in the products we
            offer. Our computer accessories are sourced from reputable brands
            known for their superior craftsmanship and performance.We understand
            the importance of prompt and secure shipping. We partner with
            reliable shipping carriers to ensure your computer accessories are
            delivered to your doorstep safely and efficiently...
          </p>
        </div>
        <div className="">
          <img
            className="lg:my-0 my-10"
            src="https://i.ibb.co/HXZbhQx/1.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
