import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-montserrat">
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
