import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const products = useLoaderData();
  const [searchItem, setSearchItem] = useState("");
  // console.log(products);

  const searchHandler = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div>
      <div className=" bg-gray-100 flex justify-center items-center">
        <div className="container mx-auto rounded-lg">
          <form onSubmit={searchHandler} className="w-80">
            <div className="flex items-center border border-purple-900 bg-white rounded-lg overflow-hidden pl-1 justify-between">
              <input
                id="searchInput"
                className="text-base text-gray-400 flex-grow outline-none font-bold font-mono px-2"
                type="text"
                placeholder="Search Your Needs..."
                onChange={(event) => setSearchItem(event.target.value)}
              />
              <div className="ms:flex items-center pl-2 rounded-lg  mx-auto ">
                <button className="bg-[#ff3633] text-white font-bold text-base rounded-lg px-4 py-2 font-mono">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center products my-12">
        {products
          .filter((product) => {
            if (searchItem === "") {
              return product;
            } else if (
              product.title.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
      </div>
    </div>
  );
};

export default Products;
