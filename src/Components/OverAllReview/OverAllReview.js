import { Rating } from "@mui/material";
import React from "react";
import { toast } from "react-hot-toast";
import useTitle from "../../Shared/TitleChange/TitleChange";
// import { useLocation, useNavigate } from "react-router-dom";

const OverAllReview = () => {
  useTitle("OverAllReview");

  const [value, setValue] = React.useState(5);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  //   const { user } = useContext(AuthContext);

  //   const email = user?.email;
  //   const name = user?.displayName;
  //   const profileImage = user?.photoURL;

  const handleReview = (event) => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const textArea = event.target.textarea.value;
    // console.log( rating, textArea);

    const review = {
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
        // console.log(data);
        event.target.reset();
        if (data.acknowledged) {
          toast.success("Your Review Added in Home Section successfully");
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <div className="card mb-8 reviewCard mt-12 card-side lg:w-[700px] m-auto  lg:h-[500px] grid lg:grid-cols-2 sm:grid-cols-1 shadow-2xl">
        <div className="w-full m-auto max-w-xs ">
          <form onSubmit={handleReview} className=" px-8 pt-6 pb-8 mb-4">
            <div className="my-4">
              <p className="font-mono font-bold">Rate this products</p>
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
              <label className="block text-gray-700 text-sm font-bold mb-2">
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
              <button className=" font-bold p-2 rounded-md hover:text-white hover:bg-[#ff3633] font-mono border border-[#37475C]">
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
