import React from "react";
import { Link } from "react-router-dom";

const OfferSection = () => {
  return (
    <div className="grid mt-10 lg:grid-cols-3 rounded-xl bg-white">
      <div className="mx-5">
        <img src="https://i.ibb.co/Yk3vPmG/4.jpg" alt="" />
      </div>
      <div className="m-auto">
        <div></div>
        <div className="text-2xl font-bold font-mono">
          <p>HOT DEAL THIS WEEK</p>
          <p>NEW COLLECTION UP TO 30% DISCOUNT</p>
        </div>
        <div className="my-5">
          <Link to="/products">
            <button className="btn mb-5 text-xl text-white hover:border-purple-900 bg-[#ff0336] hover:text-black font-mono btn-outline">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-5">
        <img src="https://i.ibb.co/Qvwz3F4/49.jpg" alt="" />
      </div>
    </div>
  );
};

export default OfferSection;
