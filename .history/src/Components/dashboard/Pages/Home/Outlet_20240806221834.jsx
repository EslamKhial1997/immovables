import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
import CreateModal from "../Outlet/Customers/actions/CreateModal";
import { useDispatch, useSelector } from "react-redux";
const OutletDashboard = () => {
  const { SideBar } = useSelector((state) => state.sharedStore);
 
  return (
    <div className="grid lg:grid-cols-11  grid-flow-col gap-4">
      <div className={`lg:col-span-2 sm:col-span-10   lg:block z-10 ${SideBar ? "" :"hidden"}`}>
        {" "}
        <Aside />
      </div>
      <div className="col-span-12 lg:col-span-10 mt-16  text-gray-50 h-screen ">
        {" "}
        <Outlet />
      </div>
      <CreateModal />
    </div>
  );
};

export default OutletDashboard;