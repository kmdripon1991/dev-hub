import React from "react";
import { Link } from "react-router-dom";

const AppliedJobItem = ({ job }) => {
  //   console.log(job);
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
  return (
    <div className="space-y-1">
      <div className="border rounded flex p-3 gap-5 justify-center">
        <div className=" bg-gray-300 w-1/5 rounded flex items-center justify-center">
          <img className="object-center" src={logo} alt="" />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center py-5">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-500">
                {job_title}
              </h2>
              <p className="text-xl font-semibold text-gray-400">
                {company_name}
              </p>
              <div className="flex gap-2">
                <p className="px-3 py-1 border rounded">{remote_or_onsite}</p>
                <p className="px-3 py-1 border rounded">{job_type}</p>
              </div>
              <div className="flex gap-4">
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
            </div>
            <Link to={`/job/${id}`}>
              <button className="btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobItem;
