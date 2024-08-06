import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div>
     <div className="col-"> <Aside /></div>
     <div className="col-"> <Outlet /></div>
    </div>
  );
};

export default OutletDashboard;
