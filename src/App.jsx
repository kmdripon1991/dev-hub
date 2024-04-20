import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
