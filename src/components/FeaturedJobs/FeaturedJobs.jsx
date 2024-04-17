import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleJob from "../SingleJob/SingleJob";

const FeaturedJobs = () => {
  const jobs = useLoaderData();
  return (
    <div className="mt-10 my-container">
      <h1 className="text-center font-bold text-3xl">Featured Jobs</h1>
      <p className="text-center text-gray-400 mt-3">
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </p>

      <div className="grid grid-cols-2 justify-center justify-items-center mt-4 gap-10">
        {jobs.map((singleJob) => (
          <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
