import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics.jsx";
import Home from "./components/Home/Home.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import {
  appliedJobsLoader,
  getCategoryAndJobs,
} from "./loaders/loaders.js";
import Blog from "./components/Blog/Blog.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: getCategoryAndJobs,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: appliedJobsLoader,
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
