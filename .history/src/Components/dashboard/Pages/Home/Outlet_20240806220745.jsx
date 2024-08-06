import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
import CreateModal from "../Outlet/Customers/actions/CreateModal";
const OutletDashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-4">
      <div className="lg:col-span-1 sm:col-span-10 hidden  lg:block z-10">
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
