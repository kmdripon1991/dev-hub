import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleJob from "../SingleJob/SingleJob";

const FeaturedJobs = () => {
  const getJobsData = useLoaderData();
  const [jobs, setJobs] = useState(getJobsData.slice(0, 4));
  const handleJobsData = () => {
    setJobs(getJobsData);
  };
  const handleViewDetails = (id) => {
    console.log("detail btn clicked", id);
  };
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
          <SingleJob
            key={singleJob.id}
            singleJob={singleJob}
            handleViewDetails={handleViewDetails}
          ></SingleJob>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <button onClick={() => handleJobsData()} className="btn-primary">
          See More
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
