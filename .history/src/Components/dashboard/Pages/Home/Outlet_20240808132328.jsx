import Aside from "./aside";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateModalCustomer from "../Outlet/Customers/actions/CreateModalCustomer";
import CreateModalGallery from "../Outlet/Gallerys/actions/CreateModalGallery";
import CreateModalPermission from "../Outlet/Permissions/actions/CreateModalPermission";
const OutletDashboard = () => {
  const { SideBar } = useSelector((state) => state.sharedStore);
  console.log(SideBar);

  return (
    <div className="grid lg:grid-cols-11 overflow-scroll grid-flow-col gap-4 ">
      <div className={`lg:col-span-2 sm:col-span-10 lg:block xl:block lg:static xl:static  fixed z-10 ${SideBar ? "hidden":""}`}>
       
        <Aside />
      </div>
      <div className="col-span-12 lg:col-span-10 mt-16  text-gray-50 h-screen ">
        {" "}
        <Outlet />
      </div>
      <CreateModalCustomer />
      <CreateModalGallery />
      <CreateModalPermission />
    </div>
  );
};

export default OutletDashboard;
