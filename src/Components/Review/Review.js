import { Rating } from "@mui/material";
import React from "react";

const Review = ({ review }) => {
  // console.log(review);
  const { profileImage, name, rating, textArea } = review;
  return (
    <div className="text-center rounded-md bg-white mx-12 mt-12">
      <div className="mb-6 pt-6 ">
        {profileImage === null ? (
          <img
            className="m-auto h-[96px] rounded-full"
            src="https://i.ibb.co/S5PRg6x/download.jpg"
            alt=""
          />
        ) : (
          <img
            className="m-auto h-[96px] rounded-full"
            src={profileImage}
            alt=""
          />
        )}
      </div>
      <p className="text-xl text-[#ff3633] font-bold font-mono mt-2">{name}</p>
      <p>
        <Rating name="read-only" value={rating} readOnly />
      </p>
      <p className="text-xl mx-4 mt-4 pb-8 font-bold font-mono">{textArea}</p>
    </div>
  );
};

export default Review;
