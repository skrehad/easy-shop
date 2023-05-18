import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTitle from "../../Shared/TitleChange/TitleChange";

const MyOrder = () => {
  useTitle("MyOrder");

  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success(" Deleted Successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="text-center my-12">
        <h1 className="text-3xl mb-4 font-mono font-bold">
          You Order <span className="text-[#ff3633]">{orders.length}</span>{" "}
          items
        </h1>
        <label
          tabIndex={0}
          className="btn btn-ghost w-[100px] h-[100px] btn-circle avatar"
        >
          <div className=" rounded-full">
            {user && user.photoURL ? (
              <img src={user.photoURL} alt="" />
            ) : (
              <img src="https://i.ibb.co/S5PRg6x/download.jpg" alt="" />
            )}
          </div>
        </label>
        <p className="text-xl font-bold font-mono mt-2">
          Name: <span className="text-[#ff3633]">{user?.displayName}</span>
        </p>
        <p className="text-xl font-bold font-mono">
          Email: <span className="text-[#ff3633]">{user?.email}</span>
        </p>
      </div>

      <div>
        {orders.length === 0 ? (
          <div className=" text-center my-8 mx-2">
            <div className="font-bold font-mono text-2xl mb-4 ">
              You have no Orders.Please Order Some Items...
            </div>
            <Link to="/products">
              <button className="btn my-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white font-mono text-center btn-outline">
                Buy Something...
              </button>
            </Link>
          </div>
        ) : (
          orders.map((order) => (
            <OrderRow
              key={order._id}
              order={order}
              handleDelete={handleDelete}
            ></OrderRow>
          ))
        )}
      </div>

      <div className="text-center pb-8">
        {orders.length === 0 ? (
          <></>
        ) : (
          <Link to="/products">
            <button className="btn my-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
              More Shopping...
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
