import React from "react";
import { Link } from "react-router-dom";

const ShortSection = () => {
  return (
    <div>
      <div>
        <p className="text-3xl font-bold font-mono ">
          We Are Always Providing Best <br /> Products Service For You
        </p>
      </div>
      <div className="mt-8">
        <Link to="/products">
          <button className="btn mb-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShortSection;
