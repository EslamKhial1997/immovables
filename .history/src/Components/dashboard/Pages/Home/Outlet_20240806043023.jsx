import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-4">
      <div className="col-span-2  lg:block">
        {" "}
        <Aside />
      </div>
      <div className="col-span-12 lg:col-span-10 mt-16 bg-black text-gray-50">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default OutletDashboard;
