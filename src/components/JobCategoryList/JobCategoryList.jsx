import React, { useEffect, useState } from "react";
import { categoryList } from "../../utils/utility";
import Category from "../Category/Category";

const JobCategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await categoryList();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // console.log(categories);

  return (
    <div className="mt-10 my-container">
      <h2 className="text-center font-bold text-3xl">Job Category List</h2>
      <p className="text-center text-gray-400 mt-3">
        <small>Explore thousands of job opportunities with all the information you
        need. Its your future</small>
      </p>
      <div className="flex gap-4 mt-4 justify-center">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
