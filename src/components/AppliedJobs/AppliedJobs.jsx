import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../utils/utility";
import SingleJob from "../SingleJob/SingleJob";
import AppliedJobItem from "../AppliedJobItem/AppliedJobItem";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs)
  const [appliedJobs, setAppliedJobs] = useState(jobs)
  // setAppliedJobs(jobs)
  console.log(appliedJobs);



  return (
    <div>
      {
        appliedJobs.map(job=><AppliedJobItem key={job.id} job={job}></AppliedJobItem>)
      }
    </div>
  );
};

export default AppliedJobs;

