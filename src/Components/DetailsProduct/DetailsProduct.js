import { Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./DetailsProduct.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import Review from "../Review/Review";
import useTitle from "../../Shared/TitleChange/TitleChange";

const DetailsProduct = () => {
  useTitle("DetailsProduct");

  const details = useLoaderData();
  const { title, description, img, pricing, rating, otherImg } = details;
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(img);
  const [reviews, setReviews] = useState([]);
  const changeImage = (event) => {
    setImage(event.target.src);
  };
  const email = user?.email;
  const profileImage = user?.photoURL;
  const name = user?.displayName;
  const [value, setValue] = React.useState(0);

  const handlePlaceOrder = () => {
    const order = {
      name,
      email,
      title,
      img,
      pricing,
      rating,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Order placed successfully");
        }
      })
      .catch((er) => console.error(er));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?title=${title}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [title]);

  const handleReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const rating = event.target.rating.value;
    const textArea = event.target.textarea.value;
    // console.log();

    const review = {
      title,
      profileImage,
      name,
      rating,
      textArea,
    };
    // console.log(review);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Review successfully Added");
          window.location.reload();
          // const remaining = reviews.filter((rev) => rev._id !== _id);
          // setReviews(remaining);
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <div className="card bg-white lg:py-5 lg:my-12 lg:mx-24 my-5 mx-4 grid lg:grid-cols-2 lg:card-side shadow-2xl">
        <div className="lg:border-r  border-purple-900">
          <div className="big-img">
            <img className="w-[400px]" src={image} alt="product" />
          </div>

          {otherImg && (
            <div className="small-img">
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

        <div className="card-body ">
          <h2 className="card-title mb-6 font-mono">{title}</h2>
          <p className="text-xl grow-0 flex items-center font-mono font-bold">
            Price: <span className="text-[#ff3633]">${pricing}</span>
          </p>
          <p className="text-xl grow-0 flex items-center font-mono font-bold">
            Rating: <Rating name="read-only" value={rating} readOnly />
          </p>
          <p className="font-mono my-6 font-bold">{description}</p>
          <button
            onClick={handlePlaceOrder}
            className="btn m-auto my-5 w-[150px] hover:bg-[#ff0336] hover:text-white font-mono"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center font-bold font-mono text-3xl my-10 lg:my-6">
        <p> Customers Reviews</p>
      </div>

      <div>
        {reviews.length === 0 ? (
          <div className=" text-center my-8 mx-2">
            <div className="font-bold text-[#ff3633] font-mono text-2xl mb-4 ">
              There are no reviews yet given for this product...
            </div>
          </div>
        ) : (
          <div className="grid lg:mx-24 lg:grid-cols-3 sm:grid-cols-1">
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        )}
      </div>

      <div className="text-center font-bold font-mono text-3xl my-10 lg:my-6">
        <p>You can review this product</p>
      </div>
      <div className="card mb-8 reviewCard card-side lg:w-[700px] m-auto  lg:h-[500px] grid lg:grid-cols-2 sm:grid-cols-1 shadow-2xl">
        <div className="m-auto">
          <img className="h-[250px] mt-6 lg:mt-0" src={img} alt="" />
        </div>
        <div className="w-full m-auto max-w-xs ">
          <form onSubmit={handleReview} className=" px-8 pt-6 pb-8 mb-4">
            <div className="form-control">
              <label className="label ">
                <span className="label-text font-mono font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered font-mono font-bold border border-[#37475C]"
                required
              />
            </div>

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

export default DetailsProduct;
