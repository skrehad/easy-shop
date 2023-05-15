import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsProduct = () => {
  const details = useLoaderData();
  console.log(details);
  return <div>DetailsProduct</div>;
};

export default DetailsProduct;
