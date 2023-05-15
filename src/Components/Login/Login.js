import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFacebook, BsGithub } from "react-icons/bs";

const Login = () => {
  const { signInEmail, googleSingIn, githubSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const signIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInEmail(email, password)
      .then((result) => {
        const user = result.user;
        event.target.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        // console.error(errorMsg);
        toast.warning(errorMsg);
      });
  };

  const signInWithGoogle = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        // console.error(errorMsg);

        toast.warning(errorMsg);
      });
  };

  const signInWithGithub = () => {
    githubSingIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        // console.error(errorMsg);

        toast.warning(errorMsg);
      });
  };

  return (
    <div className=" hero login min-h-screen bg-base-200">
      <div className="shadow-2xl flex-col lg:px-6  bg-white rounded-lg">
        <div className=" lg:text-left ">
          <h1 className="text-4xl text-center mt-6  font-bold font-mono">
            Login
          </h1>
        </div>
        <ToastContainer />
        <div className="">
          <form
            onSubmit={signIn}
            className="form1 rounded-lg card-body flex-shrink-0 w-full max-w-sm"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-mono font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered font-mono font-bold"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-mono font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered font-mono font-bold"
                required
              />
              <label className="label">
                <Link
                  to="/register"
                  className="label-text-alt font-mono font-bold link link-hover"
                >
                  New User! Please Register First
                </Link>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary font-bold">Login</button>
            </div>
          </form>
        </div>
        <div className="text-center mb-8 ">
          <h1 className="underline  font-mono font-bold">OR</h1>
          <div className="flex  gap-5 ml-[108px] mt-2">
            <BsFacebook
              onClick={signInWithGoogle}
              className="cursor-pointer text-[#687ea1] text-2xl"
            ></BsFacebook>
            <BsGithub
              onClick={signInWithGithub}
              className="cursor-pointer text-[#687ea1]  text-2xl"
            ></BsGithub>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
