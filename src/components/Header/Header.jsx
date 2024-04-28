import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className={
        location.pathname === "/"
          ? "bg-gray-500"
          : "bg-contain bg-no-repeat bg-right"
      }
      style={{
        backgroundImage:
          location.pathname === "/"
            ? "none"
            : "url('/src/assets/images/bg2.png')",
      }}
    >
      <nav className="my-container flex justify-between">
        <h1 className="font-extrabold text-3xl text-black tracking-wider">
          devHub
        </h1>
        <ul className="flex justify-between items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/applied-jobs">Applied Jobs</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </ul>
        <button className="btn-primary">Start Applying</button>
      </nav>
    </div>
  );
};

export default Header;
