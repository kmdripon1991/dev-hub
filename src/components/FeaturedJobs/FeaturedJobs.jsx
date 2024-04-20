import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleJob from "../SingleJob/SingleJob";

const FeaturedJobs = () => {
  const getJobsData = useLoaderData();
  const [jobs, setJobs] = useState(getJobsData);
  const [dataLength, setDataLength] = useState(4);

  const handleJobsData = () => {
    setJobs(getJobsData);
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
        {jobs.slice(0, dataLength).map((singleJob) => (
          <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>
        ))}
      </div>
      <div
        className={`flex items-center justify-center mt-5 ${
          dataLength === jobs.length ? "hidden" : ""
        }`}
      >
        <button
          onClick={() => setDataLength(getJobsData.length)}
          className="btn-primary"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
