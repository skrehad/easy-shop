import { Rating } from "@mui/material";
import React from "react";

const Review = ({ review }) => {
  console.log(review);
  const { profileImage, name, rating, textArea } = review;
  return (
    <div className="text-center rounded-md bg-white mx-12 mt-12">
      <div className="mb-6 pt-6 ">
        <img className="m-auto rounded-full" src={profileImage} alt="" />
      </div>
      <p className="text-xl text-[#ff3633] font-bold font-mono mt-2">{name}</p>
      <p>
        <Rating name="read-only" value={rating} readOnly />
      </p>
      <p className="text-xl mt-4 pb-8 font-bold font-mono">{textArea}</p>
    </div>
  );
};

export default Review;
