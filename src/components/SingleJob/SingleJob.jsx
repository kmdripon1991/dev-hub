import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    job_type,
    salary,
    remote_or_onsite,
  } = job;
  // console.log(job);
  return (
    <div className="p-5 border rounded w-full">
      <div className="h-5">
        <img className="object-cover" src={logo} alt="" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-500 mt-8 mb-2">
        {job_title}
      </h2>
      <p className="text-xl font-semibold text-gray-400">{company_name}</p>
      <div className="flex gap-2 mt-3 mb-3">
        <p className="px-3 py-1 border rounded">{remote_or_onsite}</p>
        <p className="px-3 py-1 border rounded">{job_type}</p>
      </div>
      <div className="flex gap-4 mt-2 mb-2">
        <div className="flex-row">
          <p className="">
            <small>
              <i className="fas fa-map-marker-alt location-icon"></i>
              <span className="ml-2">{location}</span>
            </small>
          </p>
        </div>
        <p>
          <small>
            <i className="fas fa-dollar-sign dollar-icon"></i>
            <span className="ml-2">{salary}</span>
          </small>
        </p>
      </div>
      <button className="btn-primary mt-2">
        <Link to={`/job/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default SingleJob;
