import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = userAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block w-full h-full absolute object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/684e4658-56af-48ca-8e65-db38a8799238/TZ-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 top-0 left-0 fixed h-full w-full"></div>
        <div className="fixed w-full px-4 z-50 py-[8%] sm:py-[7%]">
          <div className="max-w-[450px] h-[600px] mx-auto text-white bg-black/75">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="font-bold text-3xl text-center">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="font-mono flex flex-col w-full py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded focus:outline-none  focus:bg-green-800"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded focus:outline-none  focus:bg-green-800"
                  type="password"
                  placeholder="Password "
                  autoComplete="current-password"
                />

                <button className="bg-red-600 py-3 my-6 rounded font-mono font-bold focus:outline-none  focus:bg-blue-800">
                  Sign UP
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600 ">
                  <p className=" font-mono">
                    {" "}
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600 whitespace-nowrap">
                    Already subscribed?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
