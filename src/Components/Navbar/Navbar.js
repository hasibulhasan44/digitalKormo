import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/blogs" className="justify-between">Blogs</Link>
              </li>
              <li>
                <Link>FAQs</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
              </li>
            </ul>
          </div>
          <div className="flex">
            <img className="w-10 mr-2" src={logo} alt="" />
            <h1 className="text-3xl text-white">Digital Kormo</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/courses" className="text-white">Courses</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/blogs" className="text-white">Blogs</Link>
            </li>
            <li>
              <Link className="text-white">FAQs</Link>
            </li>
            <li>
                <button className="btn-xs sm:btn-sm md:btn-md lg:btn-md text-white">Dark Mode</button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn text-white">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
