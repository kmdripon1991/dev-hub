import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../utils/utility";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs)
//   const [appliedJobs, setAppliedJobs] = useState([]);

//   useEffect(() => {
//     const storedJobsIds = getJobApplication();
//     // console.log(storedJobsIds);
//     if (storedJobsIds.length > 0) {
//       const jobsApplied = [];
//       for (const id in storedJobsIds) {
//         const job = jobs.find((job) => job.id === id);
//         if(job){
//             jobsApplied.push(job)
//         }
//         // console.log(jobsApplied);
//       }
//       setAppliedJobs(jobsApplied)
//     }
//   }, [jobs]);
  // console.log(jobs)
  return <div>hello from applied jobs</div>;
};

export default AppliedJobs;
