import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-2">
      <div className="col-span-2 bg-gray-700">
        {" "}
        <Aside />
      </div>
      <div className="col-span-1 mt-28 bg-black w-100">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default OutletDashboard;
