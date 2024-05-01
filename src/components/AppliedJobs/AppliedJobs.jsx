import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobItem from "../AppliedJobItem/AppliedJobItem";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const [displayJobs, setDisplayJobs] = useState(appliedJobs);

  const [showMenu, setShowMenu] = useState(false);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className="bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/images/bg1.png')" }}
      >
        <div className="py-10">
          <h1 className="text-center text-3xl font-bold">Applied Jobs</h1>
        </div>
      </div>
      <div className="my-container">
        <div
          className={`relative flex items-center justify-end ${
            showMenu === true ? "mb-24" : "mb-8"
          }`}
        >
          <button
            className="px-4 py-2 bg-white border border-gray-300 text-gray-400 rounded-md shadow-md hover:bg-gray-100 inline-flex justify-center"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Filter By</span>
            <svg
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showMenu && (
            <div className="absolute right-0 top-0">
              <div className="bg-white border border-gray-300 rounded-md shadow-md">
                <button
                  onClick={() => handleJobsFilter("all")}
                  className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                >
                  All
                </button>
                <button
                  onClick={() => handleJobsFilter("remote")}
                  className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                >
                  Remote
                </button>
                <button
                  onClick={() => handleJobsFilter("onsite")}
                  className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                >
                  Onsite
                </button>
              </div>
            </div>
          )}
        </div>
        {displayJobs.map((job) => (
          <AppliedJobItem key={job.id} job={job}></AppliedJobItem>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
