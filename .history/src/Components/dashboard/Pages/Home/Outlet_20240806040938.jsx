import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div>
     <div className="grid"> <Aside /></div>
     <div className="grid"> <Outlet /></div>
    </div>
  );
};

export default OutletDashboard;
