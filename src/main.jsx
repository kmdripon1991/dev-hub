import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics.jsx";
import Home from "./components/Home/Home.jsx";
import { getJobs } from "./utils/utility.js";
import JobDetails from "./components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: getJobs,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: getJobs,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
