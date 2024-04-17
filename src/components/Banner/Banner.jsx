import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-300">
      <div className="my-container flex">
        <div className="w-1/2">
          <h1 className="font-extrabold text-7xl mt-16">
            One Step <br /> Closer To Your <br />
            <span className="text-purple-500">Dream Job</span>
          </h1>
          <p className="text-gray-500 font-medium mt-4 text-sm">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="btn-primary mt-4">Get Started</button>
        </div>
        <div className="w-1/2">
          <img
            className="object-cover"
            src="src/assets/images/user.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
