import { json } from "react-router-dom";

const categoryList = async () => {
  try {
    const categoryListData = await fetch("./categories.json");
    const categoryList = await categoryListData.json();
    return categoryList;
  } catch (error) {
    throw error;
  }
};

const getJobs = async () => {
  try {
    const jobsData = await fetch("./jobs.json");
    const jobs = await jobsData.json();
    return jobs;
  } catch (error) {
    throw error;
  }
};

const getJobApplication = () => {
  let jobApplication = [];
  const storedJobApplication = localStorage.getItem("job-application");
  if (storedJobApplication) {
    jobApplication = JSON.parse(storedJobApplication);
  }
  return jobApplication;
};

const saveJobApplication = (id) => {
  let jobApplication = getJobApplication();
  const exists = jobApplication.find((jobId) => jobId === id);
  if (!exists) {
    jobApplication.push(id);
  }
  localStorage.setItem("job-application", JSON.stringify(jobApplication));
};

export { 
  categoryList, 
  getJobs, 
  saveJobApplication, 
  getJobApplication 
};
