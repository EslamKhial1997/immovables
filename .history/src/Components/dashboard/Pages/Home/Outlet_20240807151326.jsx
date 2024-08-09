import Aside from "./aside";
import { Outlet } from "react-router-dom";

import CreateModal from "../Outlet/Gallerys/actions/CreateModal";
import { useSelector } from "react-redux";
import CreateModalCustomer from "../Outlet/Customers/actions/CreateModalCustomer";
const OutletDashboard = () => {
  const { SideBar } = useSelector((state) => state.sharedStore);
  console.log(SideBar);

  return (
    <div className="grid lg:grid-cols-11 overflow-hidden grid-flow-col gap-4 ">
      <div className={`lg:col-span-2 sm:col-span-10 lg:block xl:block lg:static xl:static  fixed z-10 ${SideBar ? "hidden":""}`}>
       
        <Aside />
      </div>
      <div className="col-span-12 lg:col-span-10 mt-16  text-gray-50 h-screen ">
        {" "}
        <Outlet />
      </div>
      <CreateModalCustomer />
      <CreateModal />
    </div>
  );
};

export default OutletDashboard;
