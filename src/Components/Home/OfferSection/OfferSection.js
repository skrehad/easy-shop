import React from "react";
import { Link } from "react-router-dom";

const OfferSection = () => {
  return (
    <div className="lg:grid mt-10 lg:grid-cols-3 rounded-xl bg-white">
      <div className="mx-5">
        <img src="https://i.ibb.co/Yk3vPmG/4.jpg" alt="" />
      </div>
      <div className="m-auto">
        <div className="grid mb-5  grid-flow-col text-center gap-2">
          <div className="flex flex-col mx-auto p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 5 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 mx-auto bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 mx-auto bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 mx-auto bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 38 }}></span>
            </span>
            sec
          </div>
        </div>
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
