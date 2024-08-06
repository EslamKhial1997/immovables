import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div>
     <div className=""> <Aside /></div>
     <div className=""> <Outlet /></div>
    </div>
  );
};

export default OutletDashboard;
