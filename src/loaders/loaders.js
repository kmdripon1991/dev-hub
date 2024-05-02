import { getJobApplication } from "../utilities/utility";

const appliedJobsLoader = async () => {
  const loadedJobs = await fetch("/jobs.json");
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

const getCategoryAndJobs = async () => {
  try {
    const categoryListData = await fetch("/categories.json");
    const categoryList = await categoryListData.json();

    const getJobsData = await fetch("/jobs.json");
    const jobsData = await getJobsData.json();
    return { categoryList, jobsData };
  } catch (error) {
    throw error;
  }
};

export { 
  appliedJobsLoader, 
  getCategoryAndJobs 
};
