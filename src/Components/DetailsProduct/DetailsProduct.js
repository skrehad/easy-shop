import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./DetailsProduct.css";

const DetailsProduct = () => {
  const details = useLoaderData();
  const { title, description, img, pricing, rating, otherImg } = details;
  const [image, setImage] = useState(img);
  const changeImage = (event) => {
    setImage(event.target.src);
  };
  return (
    <div className="card bg-white lg:py-5 lg:my-12 lg:mx-24 my-5 mx-4 grid lg:grid-cols-2 lg:card-side shadow-2xl">
      <div className="lg:border-r  border-purple-900">
        <div className="big-img">
          <img className="w-[400px]" src={image} alt="product" />
        </div>

        {otherImg && (
          <div className="small-imgs">
            <img
              className="shadow-2xl"
              onMouseOver={changeImage}
              src={img}
              alt="product"
            />
            <img
              className="shadow-2xl"
              onMouseOver={changeImage}
              src={otherImg[0]}
              alt="product"
            />
            <img
              className="shadow-2xl"
              onMouseOver={changeImage}
              src={otherImg[1]}
              alt="product"
            />
          </div>
        )}
      </div>

      <div className="card-body">
        <h2 className="card-title font-mono">{title}</h2>
        <p className="text-xl flex items-center font-mono font-bold">
          Price: <span className="text-[#ff3633]">${pricing}</span>
        </p>
        <p className="text-xl flex items-center font-mono font-bold">
          Rating: <Rating name="read-only" value={rating} readOnly />
        </p>
        <p className="font-mono font-bold">{description}</p>
        <button className="btn m-auto my-5 w-[150px] hover:bg-[#ff0336] hover:text-white font-mono">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailsProduct;
