import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <p className="text-[250px] font-mono font-bold">404</p>
      <p className="text-2xl font-mono font-bold">Page Not Found</p>
      <p className="font-mono mx-5 font-bold text-lg">
        The page you are looking for doesn't exist. Go to{" "}
        <Link to="/" className="text-[#ff3633] underline">
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
