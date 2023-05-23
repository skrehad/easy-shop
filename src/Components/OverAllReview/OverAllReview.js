import { Rating } from "@mui/material";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import useTitle from "../../Shared/TitleChange/TitleChange";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const OverAllReview = () => {
  useTitle("AddReview");

  const [value, setValue] = React.useState(5);
  const { user } = useContext(AuthContext);

  const email = user?.email;
  const name = user?.displayName;
  const profileImage = user?.photoURL;

  const handleReview = (event) => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const textArea = event.target.textarea.value;

    const review = {
      name,
      email,
      profileImage,
      rating,
      textArea,
    };
    fetch("http://localhost:5000/overAllReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        if (data.acknowledged) {
          toast.success(
            "Your Review Added in Home Section successfully. Thanks for your feedback."
          );
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <div className="text-center text-[#ff3633] text-3xl my-20">
        <p className="uppercase">Review Us on </p>
      </div>
      <div className="card mb-8 lg:w-[500px] mx-5 mt-12 card-side lg:mx-auto shadow-2xl">
        <div className="w-full m-auto max-w-xs ">
          <form onSubmit={handleReview} className=" px-8 pt-6 pb-8 mb-4">
            <div className="my-4 text-center">
              <p className="font-mono mb-1 font-bold">Rate this products</p>
              <Rating
                type="number"
                name="rating"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-center text-gray-700 text-sm font-bold mb-4">
                Say about this products
              </label>
              <textarea
                type="text"
                name="textarea"
                placeholder=""
                className="textarea textarea-bordered textarea-lg w-full max-w-xs border border-[#37475C]"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button className=" font-bold py-2 px-4 rounded-md hover:text-white hover:bg-[#ff3633] font-mono border border-[#37475C]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OverAllReview;
