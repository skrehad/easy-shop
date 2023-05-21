import React from "react";
import "./HomeBlog.css";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <div>
      <div className="flex mx-6 flex-col text-center relative items-center">
        <p className="text-white mt-4 mb-2 relative text-xl uppercase font-bold">
          latest blog
        </p>

        <h2 className="text-4xl font-bold mb-4">Our Recent News</h2>
        <p className="text-[#b1aeae] mx-8 mb-8 font-medium text-[15px] ">
          SK GYM an unknown printer took a galley of type and scrambled
          <br /> make a type specimen book.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 mx-4 mb-16 ">
        <div class="bg-gray-700 mb-4 max-w-sm m-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="m-8 ">
            <h4 className="my-4">
              <span className="border rounded-lg p-2">11.03.2023</span>
            </h4>
            <div class="font-bold text-white text-xl mb-2">
              Yoga For Everyone in 2023
            </div>
            <p class="mb-5 text-base">
              This is program designed to make a man to the practice of yoga
              beneficial for people of all ages, abilities, and backgrounds.
            </p>

            <Link to="/blog">
              <button className="text-xl bg-[#ff0336] mt-4 mb-6 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
                Read More...
              </button>
            </Link>
          </div>
        </div>
        <div class="bg-gray-700 mb-4 max-w-sm m-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="m-8 ">
            <h4 className="my-4">
              <span className="border rounded-lg p-2">14.03.2023</span>
            </h4>
            <div class="font-bold text-white text-xl mb-2">
              Getting Back Into CrossFit After Vacation
            </div>
            <p class="mb-4 text-base">
              Learn how to ease back into your CrossFit routine after a vacation
              with tips and strategies for success.
            </p>

            <Link to="/blog">
              <button className="text-xl bg-[#ff0336] mb-4 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
                Read More...
              </button>
            </Link>
          </div>
        </div>
        <div class="bg-gray-700 max-w-sm m-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="m-8 ">
            <h4 className="my-4">
              <span className="border rounded-lg p-2">29.03.2023</span>
            </h4>
            <div class="font-bold text-white text-xl mb-2">
              Meet Fitness Ambassador Grace
            </div>
            <p class="mb-4 text-base">
              Get to know Grace, a fitness enthusiast and dedicated ambassador
              who is passionate about helping others reach their fitness goals.
            </p>

            <Link to="/blog">
              <button className="text-xl bg-[#ff0336] mb-5 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
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
