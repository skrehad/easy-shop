import { Rating } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
// import { Link } from "react-router-dom";

const HomeProducts = () => {
  const { data: homeProducts } = useQuery("repoData", () =>
    fetch("http://localhost:5000/homeProducts").then((res) => res.json())
  );
  return (
    <div>
      <h1 className="text-3xl my-8 font-bold font-mono text-[#ff3633]">
        Our Products
      </h1>
      <div className="text-center products my-12">
        {homeProducts?.map((product) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg mb-8 bg-white">
            <img src={product.img} alt="" srcset="" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{product.title}</div>

              <p className="text-xl flex items-center font-mono font-bold">
                Price:{" "}
                <span className="text-[#ff3633]">${product.pricing}</span>
              </p>
              <p className="text-xl flex items-center font-mono font-bold">
                Rating:{" "}
                <Rating name="read-only" value={product.rating} readOnly />
              </p>
              <p class="text-gray-700 text-base">
                {product.description?.slice(1, 150)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
