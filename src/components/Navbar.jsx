import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

function Navbar() {
  const { user, Logout } = userAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await Logout();
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="flex justify-between w-full items-center z-[100] absolute p-4">
      <Link to="/">
        <img
          className="cursor-pointer object-cover h-[30px] w-[130px]  md:h-[60px] md:w-[160px]  "
          src="/images/logo/logo.png"
          alt="/"
        />
      </Link>
      {user?.email ? (
        <div>
          <Link to="/accaunt">
            <button className="text-white pr-4 ">Accaunt</button>
          </Link>

          <button
            onClick={handleLogout}
            className="text-white bg-red-600 px-6 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 ">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-red-600 px-6 py-2 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
