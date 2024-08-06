import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-3">
      <div className="col-span-2 bg-gray-700">
        {" "}
        <Aside />
      </div>
      <div className="col-span-10 mt-16 bg-black text-gray-50">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default OutletDashboard;
