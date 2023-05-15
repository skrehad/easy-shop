import React from "react";
import "./Blogs.css";
import { Link, useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="blogsSection">
      <h1 className="text-center font-bold text-3xl font-mono pt-14 mb-8 text-[#ff3633]">
        The Future Of Technology
      </h1>

      <div className="blogs">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>

      <div className="text-center pb-8">
        <Link to="/blog">
          <button className="btn my-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
            More Blogs...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
