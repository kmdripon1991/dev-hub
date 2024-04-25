import { getJobApplication } from "../utils/utility";

const appliedJobsLoader = async () => {
  const loadedJobs = await fetch("jobs.json");
  const jobs = await loadedJobs.json();
  const appliedJobs = getJobApplication();
  const jobsApplied = [];
  for (const id of appliedJobs) {
    const jobApplied = jobs.find((job) => job.id === id);
    if (jobApplied) {
      jobsApplied.push(jobApplied);
    }
  }
  return jobsApplied;
};

export default appliedJobsLoader;

