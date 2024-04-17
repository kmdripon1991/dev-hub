import React from "react";
import Banner from "../Banner/Banner";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
