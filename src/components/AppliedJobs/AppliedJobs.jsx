import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../utils/utility";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs)
 
  return <div>hello from applied jobs</div>;
};

export default AppliedJobs;
