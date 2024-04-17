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

export { categoryList, getJobs };
