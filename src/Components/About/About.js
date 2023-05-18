import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="text-[#ff0336] my-12 font-bold  font-mono text-center text-3xl">
        About US
      </div>
      <div className="aboutSection">
        <div className="text-center my-auto mx-10">
          <p className="font-bold text-2xl text-[#ff0336]  font-mono  underline underline-offset-8">
            WHO WE ARE
          </p>
          <h2 className="font-bold my-4  font-mono text-xl">
            Customer Satisfaction is our First Priority
          </h2>
          <p className="font-bold font-mono">
            Having happy customers is one of the easiest ways to ensure a
            successful business. Customer satisfaction is an indicator of the
            positive experience that a consumer has when interacting with a
            business.
          </p>
          <Link to="/contact">
            <button className="btn my-5 font-mono btn-outline hover:bg-[#ff0336] hover:text-white">
              Contact Us
            </button>
          </Link>
        </div>

        <div className=" imgSize ">
          <img src="https://i.ibb.co/VwHRxCs/1.jpg" alt="" />
        </div>
      </div>
      <div className="aboutSection">
        <div>
          <img src="https://i.ibb.co/McKkvmm/2.jpg" alt="" />
        </div>

        <div className="text-center my-auto mx-10">
          <p className="font-bold text-[#ff0336] mt-4 text-2xl  font-mono  underline underline-offset-8">
            Our Team Work
          </p>
          <p className=" mt-4 font-bold font-mono">
            A team comprises a group of people, and when you’re embarking on big
            projects, it gets almost impossible to do everything alone.It is
            important to start with a teamwork essay introduction that states
            its importance and different uses.
          </p>
          <Link to="/contact">
            <button className="btn my-5 hover:bg-[#ff0336] hover:text-white font-mono  btn-outline">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="aboutSection">
        <div className="text-center my-auto mx-10">
          <p className=" text-2xl text-[#ff0336] font-bold font-mono underline underline-offset-8">
            What is Our Mission?
          </p>

          <p className=" mt-4 font-bold font-mono">
            We believe in our product.We integrate systems and technologies
            designed by our team with the most advanced technologies available
            to deliver more reliable and efficient energy projects.Our global
            platform is our strength.
          </p>
          <Link to="/contact">
            <button className="btn my-5 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
              Contact Us
            </button>
          </Link>
        </div>

        <div>
          <img src="https://i.ibb.co/pn4xxXd/3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
