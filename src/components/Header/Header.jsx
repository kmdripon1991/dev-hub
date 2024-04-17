import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-300">
      <nav className="my-container flex justify-between">
        <h1 className="font-extrabold text-3xl text-black tracking-wider">
          devHub
        </h1>
        <ul className="flex justify-between items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink>Applied Jobs</NavLink>
          <NavLink>Blog</NavLink>
        </ul>
        <button className="btn-primary mr-16">Start Applying</button>
      </nav>
    </div>
  );
};

export default Header;
