import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const { img, blogTitle, blogDescription, writer, time } = props.blog;
  return (
    <div>
      <div className="blogCard bg-white shadow-2xl  m-auto my-8 max-w-sm rounded overflow-hidden">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold font-mono text-[#ff3633] text-center text-2xl mb-4">
            {blogTitle}
          </div>
          <p className="description font-bold text-center font-mono">
            {blogDescription}
            <Link className="text-[#ff3633]" to="/blog">
              {" "}
              See More...
            </Link>
          </p>
        </div>
        <div className="mb-4 cardFooter border-t border-purple-900   font-bold font-mono">
          <p className=" ml-4 text-center mt-2">Writer- {writer}</p>
          <p className="mr-4 text-center mt-2">Date- {time}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
