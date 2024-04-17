const categoryList = async () => {
  try {
    const categoryListData = await fetch("./categories.json");
    const categoryList = await categoryListData.json();
    // console.log(categoryList);
    return categoryList;
  } catch (error) {
    // console.error("Error fetching data:", error);
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
