import React from "react";

const Category = ({ category }) => {
  const { logo, availability, category_name } = category;
  // console.log(category);
  return (
    <div className="flex-col p-5 border rounded bg-gray-300 w-full">
      <div className="p-2 bg-gray-400 w-16 h-16 rounded">
        <img className=" object-cover rounded" src={logo} alt="" />
      </div>
      <h3 className="mt-5 font-bold">{category_name}</h3>
      <p className="text-gray-400 text-sm mt-3">{availability}</p>
    </div>
  );
};

export default Category;
