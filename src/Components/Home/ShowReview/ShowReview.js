import { Rating } from "@mui/material";
import React from "react";

const ShowReview = (allReview) => {
  const { name, email, profileImage, rating, textArea } = allReview.allReview;
  // console.log(allReview);
  return (
    <div className="bg-white p-10 m-5 rounded-lg">
      <div className="flex space-x-3 mb-5">
        {profileImage === null ? (
          <img
            className="m-auto h-[96px] rounded-full"
            src="https://i.ibb.co/S5PRg6x/download.jpg"
            alt=""
          />
        ) : (
          <img className="rounded-full w-16 h-16" src={profileImage} alt="" />
        )}

        <div className="space-y-0.5 mt-2 font-medium dark:text-white text-left">
          <Rating name="read-only" value={rating} readOnly />
          <div className="text-sm font-mono font-bold text-black">{email}</div>
        </div>
      </div>
      <div className="text-left">
        <p className="font-bold font-mono">{name}</p>
        <p className="">{textArea}</p>
      </div>
    </div>
  );
};

export default ShowReview;
