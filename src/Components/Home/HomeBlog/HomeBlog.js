import React from "react";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <div>
      <div className="flex mx-6 flex-col text-center relative items-center">
        <p className=" mt-4 mb-2 font-mono relative text-xl uppercase font-bold">
          latest blog
        </p>

        <h2 className="text-4xl font-bold font-mono text-[#ff3633] mb-4">
          Our Recent News
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 mb-16 ">
        <div className=" mb-4 bg-slate-50 max-w-sm m-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="m-8 ">
            <h4 className="my-4">
              <span className="border rounded-lg p-2">11.03.2023</span>
            </h4>
            <div className="font-bold font-mono text-xl mb-2">
              Yoga Top 10 Mobile App Development Frameworks In 2023
            </div>
            <p className="mb-5 text-base font-mono">
              What are frameworks in Mobile App Development? In mobile app
              development, a framework is a software tool that provides
              developers...
            </p>

            <Link to="/blog">
              <button className="text-xl bg-[#ff0336] mt-4 mb-6 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
                Read More...
              </button>
            </Link>
          </div>
        </div>
        <div className=" mb-4 bg-slate-50 max-w-sm m-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="m-8 ">
            <h4 className="mb-4 mt-9">
              <span className="border rounded-lg p-2">11.03.2023</span>
            </h4>
            <div className="font-bold font-mono text-xl mb-2">
              12 factors Startups need to succeed in 2023
            </div>
            <p className="mb-5 text-base font-mono">
              No startup can become successful with just a promising idea -
              especially in 2023.Reimagine how you measure business performance
              to adapt faster. With the market already saturated and...
            </p>

            <Link to="/blog">
              <button className="text-xl bg-[#ff0336] mt-4 mb-6 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
                Read More...
              </button>
            </Link>
          </div>
        </div>
        <div className=" mb-4 bg-slate-50 max-w-sm m-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="m-8 ">
            <h4 className="mb-4 mt-9">
              <span className="border rounded-lg p-2">11.03.2023</span>
            </h4>
            <div className="font-bold font-mono text-xl mb-2">
              Top Cloud Security Risks in 2023 & How to Tackle Them
            </div>
            <p className="mb-5 text-base font-mono">
              Cloud computing has revolutionized the way businesses operate,
              providing scalable and cost-effective computing resources
              revolutionized. However, with the increase in the...
            </p>

            <Link to="/blog">
              <button className="text-xl bg-[#ff0336] mt-4 mb-6 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
                Read More...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
