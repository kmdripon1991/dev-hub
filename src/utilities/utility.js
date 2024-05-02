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

export { saveJobApplication, getJobApplication };
