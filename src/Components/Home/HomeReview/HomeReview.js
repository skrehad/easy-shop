import React from "react";
import { Link } from "react-router-dom";

const HomeReview = () => {
  return (
    <div>
      <p className="text-3xl font-bold fond-mono text-[#ff3633]">
        What are our customers saying?
      </p>
      <div className="my-12">
        <p>review section</p>
      </div>
      <div className="mt-8">
        <Link to="/addReview">
          <button className="btn mb-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
            Leave a Comment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeReview;
