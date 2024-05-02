import React from "react";
import { saveJobApplication } from "../../utilities/utility";
import { useLoaderData, useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/solid";
import {
  CurrencyDollarIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const { jobId } = useParams();
  // console.log(jobId, typeof jobId)
  const jobIdInt = parseInt(jobId);
  const job = jobs.find((job) => job.id === jobIdInt);

  const {
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(jobIdInt);
    toast("Successfully job applied");
  };
  return (
    <div>
      <div
        className="bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/images/bg1.png')" }}
      >
        <div className="py-10">
          <h1 className="text-center text-3xl font-bold">Job Details</h1>
        </div>
      </div>

      <div className="my-container flex gap-4 mb-5">
        <div className="w-2/3 space-y-5">
          <p>
            <span className="font-bold text-black">Job Description: </span>
            <span className="text-gray-500">{job_description}</span>
          </p>
          <p>
            <span className="font-bold text-black">Job Responsibility: </span>
            <span className="text-gray-500">{job_responsibility}</span>
          </p>
          <p>
            <span className="font-bold text-black">
              Educational Requirements:
            </span>{" "}
            <br />
            <span className="text-gray-500">{educational_requirements}</span>
          </p>
          <p>
            <span className="font-bold text-black">Experience:</span> <br />
            <span className="text-gray-500">{experiences}</span>
          </p>
        </div>
        <div className="w-1/3">
          <div className="border rounded p-5 space-y-5 bg-gray-300">
            <div className="space-y-5 divide-y-2">
              <h2 className="font-bold">Job Details</h2>
              <div>
                <p className="flex mt-5">
                  <CurrencyDollarIcon className="w-6 h-6 text-blue-400"></CurrencyDollarIcon>{" "}
                  <span className="font-bold">Salary: </span> {salary}
                </p>
                <p className="flex">
                  <BriefcaseIcon className="w-6 h-6 text-blue-400"></BriefcaseIcon>
                  <span className="font-bold">Job Title: </span>
                  {job_title}
                </p>
              </div>
            </div>

            <div className="space-y-5 divide-y-2">
              <h2 className="font-bold">Contact Information</h2>
              <div>
                <div className="flex gap-2 mt-5">
                  <PhoneIcon className="w-6 h-6 text-blue-400"></PhoneIcon>{" "}
                  <p>
                    <span className="font-bold">Phone:</span>{" "}
                    {contact_information.phone}
                  </p>
                </div>
                <div className="flex gap-2">
                  <EnvelopeIcon className="w-6 h-6 text-blue-400"></EnvelopeIcon>{" "}
                  <p>
                    <span className="font-bold">Email: </span>
                    {contact_information.email}
                  </p>
                </div>
                <div className="flex gap-2">
                  <MapPinIcon className="w-6 h-6 text-blue-400"></MapPinIcon>{" "}
                  <p>
                    <span className="font-bold">Address: </span>
                    {contact_information.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button onClick={handleApplyJob} className="btn-primary w-full">
              Apply Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
