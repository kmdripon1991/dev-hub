import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  return (
    <div
      className="bg-gray-400"
      style={{
        background: isRootPath || `url('/src/assets/images/bg2.png')`,
        backgroundPosition: isRootPath || "right",
        backgroundRepeat: isRootPath || "no-repeat",
        
      }}
    >
      <nav className="my-container flex justify-between pb-8">
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
