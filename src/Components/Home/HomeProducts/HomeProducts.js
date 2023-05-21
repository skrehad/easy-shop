import { Rating } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const { data: homeProducts } = useQuery("repoData", () =>
    fetch("http://localhost:5000/homeProducts").then((res) => res.json())
  );
  return (
    <div>
      <h1 className="text-3xl my-8 font-bold font-mono text-[#ff3633]">
        Our Products
      </h1>
      <div className="text-center grid lg:grid-cols-3 my-12">
        {homeProducts?.map((homeProduct) => (
          <div class="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg mb-8 bg-white">
            <img
              src={homeProduct.img}
              className="w-[250px] h-[200px] lg:w-[300px] lg:h-[250px] my-4 mx-auto"
              alt=""
              srcset=""
            />
            <div class="px-6 py-4 text-center">
              <div class="font-bold font-mono text-xl mb-2">
                {homeProduct.title}
              </div>

              <p className="text-xl font-mono font-bold">
                Price:{" "}
                <span className="text-[#ff3633]">${homeProduct.pricing}</span>
              </p>

              <div className=" text-center mx-auto my-2">
                <p className=" text-xl font-mono font-bold">
                  <p className="">Rating</p>

                  <Rating
                    name="read-only"
                    value={homeProduct.rating}
                    readOnly
                  />
                </p>
              </div>

              <p class="text-gray-700 font-mono text-base">
                {homeProduct.description?.slice(1, 150)}...
              </p>

              <Link to={`/products/${homeProduct.id}`}>
                <button className="btn border border-purple-900  my-2 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link to="/products">
        <button className="btn mb-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
          More Products...
        </button>
      </Link>
    </div>
  );
};

export default HomeProducts;
