import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Components/About/About";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import Register from "../Components/Register/Register";
import Main from "../LayOuts/Main";
import MyOrder from "../Components/MyOrder/MyOrder";
import Products from "../Components/Products/Products";
import DetailsProduct from "../Components/DetailsProduct/DetailsProduct";
// import PrivateRouter from "./PrivateRouter";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/products",
          // loader: async () => fetch("http://localhost:5000/products"),
          element: <Products></Products>,
        },
        {
          path: "/products/:id",
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/products/${params.id}`);
          },
          element: <DetailsProduct></DetailsProduct>,
        },
        {
          path: "/myOrders",
          element: <MyOrder></MyOrder>,
        },

        {
          path: "/blog",
          // loader: () => fetch("http://localhost:5000/blogs"),
          element: <Blogs></Blogs>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
