import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { createContext } from "react";

export const CategoriesContext = createContext([]);
export const JobsContext = createContext([]);

function App() {
  const { categoryList, jobsData } = useLoaderData();
  
  return (
    <CategoriesContext.Provider value={categoryList}>
      <JobsContext.Provider value={jobsData}>
        <div>
          <Header />
          <Outlet></Outlet>
          <Toaster></Toaster>
        </div>
      </JobsContext.Provider>
    </CategoriesContext.Provider>
  );
}

export default App;
