import { Rating } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  // const [searchItem, setSearchItem] = useState("");
  const { data: homeProducts } = useQuery("repoData", () =>
    fetch("http://localhost:5000/homeProducts").then((res) => res.json())
  );
  return (
    <div>
      <div className="text-center products my-12">
        {homeProducts?.map((product) => (
          <div className="card cardDiv w-96 mb-8 m-auto bg-base-300 shadow-2xl">
            <img
              src={product.img}
              alt="Shoes"
              className="bg-white rounded-lg m-4"
            />

            <div className="card-body gap-0 px-6 py-4 items-center text-center">
              <h2 className="card-title font-mono">{product.title}</h2>
              <p className="text-xl flex items-center font-mono font-bold">
                Price:{" "}
                <span className="text-[#ff3633]">${product.pricing}</span>
              </p>
              <p className="text-xl flex items-center font-mono font-bold">
                Rating:{" "}
                <Rating name="read-only" value={product.rating} readOnly />
              </p>
              <p className="font-mono text-md">
                {product.description?.slice(1, 250)}...
              </p>
              <Link to="/products">
                <button className="btn border border-purple-900  my-2 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
                  More Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
