import React from "react";

const PageAnalysis = () => {
  return (
    <div className="text-center my-12">
      <div className=" shadow-2xl mx-[18px] rounded-lg py-6 bg-white grid lg:grid-cols-3 grid-cols-1">
        <div className=" py-8 text-center lg:border-r border-purple-900">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-mono font-bold">Total Likes</div>
          <div className="stat-value text-primary  mb-2">5.6K</div>
          <div className="stat-desc font-mono font-bold">
            21% more than last month
          </div>
        </div>

        <div className="py-8 text-center lg:border-r border-purple-900">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-mono font-bold">Page Views</div>
          <div className="stat-value text-secondary  mb-2">95k</div>
          <div className="stat-desc font-mono font-bold">
            18% more than last month
          </div>
        </div>

        <div className=" py-8 text-center">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-mono font-bold">Delivery</div>

          <div className="stat-value mb-2 ">86%</div>
          <div className="stat-desc font-mono font-bold">
            Order delivery done
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageAnalysis;
