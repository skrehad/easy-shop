import React, { useContext } from "react";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFacebook, BsGithub } from "react-icons/bs";

const Register = () => {
  const { createUser, updateName, googleSingIn, githubSingIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const register = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
        navigate(from, { replace: true });
        displayName(name);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };

  const displayName = (name) => {
    updateName(name)
      .then(() => {})
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };

  const signInWithGoogle = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success("Success Register");
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };

  const signInWithGithub = () => {
    githubSingIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success("Success Register");
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.warning(errorMsg);
      });
  };
  return (
    <div className=" hero register min-h-screen bg-base-200">
      <div className=" flex-col shadow-2xl lg:px-8  bg-white rounded-lg">
        <div className=" lg:text-left ">
          <h1 className="text-2xl text-center mt-8  font-bold font-mono">
            Create An Account
          </h1>
        </div>
        <ToastContainer />

        <div className="">
          <form
            onSubmit={register}
            className="form rounded-lg card-body flex-shrink-0 w-full max-w-sm"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-mono font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered font-mono font-bold"
                required
              />
            </div>
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
                  to="/login"
                  className="label-text-alt font-mono font-bold link link-hover"
                >
                  You Have Already anAccount?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary font-bold">Register</button>
            </div>
          </form>
        </div>

        <div className="text-center mb-8">
          <h1 className="underline  font-mono font-bold mt-0">OR</h1>
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

export default Register;
