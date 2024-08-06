import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div>
     <div className="col-span-3"> <Aside /></div>
     <div className="col-span-10"> <Outlet /></div>
    </div>
  );
};

export default OutletDashboard;
