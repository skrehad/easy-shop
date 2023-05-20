import { Rating } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

const TopSellingProducts = () => {
  const { data: topSellingProducts } = useQuery("repoData", () =>
    fetch("http://localhost:5000/topSellingProducts").then((res) => res.json())
  );
  return (
    <div>
      <h1 className="text-3xl my-8 font-bold font-mono text-[#ff3633]">
        Top Selling
      </h1>
      <div className="text-center grid lg:grid-cols-3 mb-12">
        {topSellingProducts?.map((product) => (
          <div className="w-full max-w-sm mb-6 mx-auto bg-white border rounded-lg shadow-2xl">
            <img
              src={product.img}
              className="p-8 rounded-t-lg"
              alt=""
              srcset=""
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl mb-4 font-bold font-mono">
                {product.title}
              </h5>

              <div className=" text-center mx-auto my-2">
                <p className=" font-mono font-bold">
                  <Rating name="read-only" value={product.rating} readOnly />
                  <span className="text-3xl ml-3">{product.rating}</span>
                </p>
              </div>
              <div className="mx-auto">
                <span className="text-3xl font-bold font-mono">
                  ${product.pricing}
                </span>
              </div>
            </div>
          </div>

          // <div className="card cardDiv w-96 mb-8 m-auto bg-base-300 shadow-2xl">
          //   <img
          //     src={product.img}
          //     alt="Shoes"
          //     className="bg-white rounded-lg m-4"
          //   />

          //   <div className="card-body gap-0 px-6 py-4 items-center text-center">
          //     <h2 className="card-title font-mono">{product.title}</h2>
          //     <p className="text-xl flex items-center font-mono font-bold">
          //       Price:{" "}
          //       <span className="text-[#ff3633]">${product.pricing}</span>
          //     </p>
          //     <p className="text-xl flex items-center font-mono font-bold">
          //       Rating:{" "}
          //       <Rating name="read-only" value={product.rating} readOnly />
          //     </p>
          //     <p className="font-mono text-md">
          //       {product.description?.slice(1, 150)}...
          //     </p>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
