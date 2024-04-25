import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Statistics = () => {
  const data = [
    {
      id: 1,
      name: "Assignment 1",
      marks: 60,
    },
    {
      id: 2,
      name: "Assignment 2",
      marks: 50,
    },
    {
      id: 3,
      name: "Assignment 3",
      marks: 40,
    },
    {
      id: 4,
      name: "Assignment 4",
      marks: 45,
    },
    {
      id: 5,
      name: "Assignment 5",
      marks: 35,
    },
    {
      id: 6,
      name: "Assignment 6",
      marks: 30,
    },
    {
      id: 7,
      name: "Assignment 7",
      marks: 25,
    },
  ];

  const chartWidth = window.innerWidth * 0.8;
  const chartHeight = window.innerHeight * 0.8;

  return (
    <div className="flex justify-center items-start w-full h-full">
      <PieChart width={chartWidth} height={chartHeight}>
        <Pie
          dataKey="marks"
          startAngle={360}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={Math.min(chartWidth, chartHeight) * 0.4}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
