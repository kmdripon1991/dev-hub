import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";

const SingleJob = ({ singleJob }) => {
  const { logo, job_title, company_name, location, job_type, salary } =
    singleJob;
  console.log(singleJob);
  return (
    <div className="p-5 border rounded w-full">
      {/* <h2>Single job</h2> */}
      <img src={logo} alt="" />
      <h2>{job_title}</h2>
      <p>{company_name}</p>
      <div className="flex justify-between rounded">
        <p>{job_type}</p>
        <p>{job_type}</p>
      </div>
      <div className="flex gap-4">
        <div className="flex-row">
          <p>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
          </p>
          <p className="">{location}</p>
        </div>
        <p>
          <small>{salary}</small>
        </p>
      </div>
      <button className="btn-primary">View Details</button>
    </div>
  );
};

export default SingleJob;
