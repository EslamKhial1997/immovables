import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiTable,
  HiUser,
  HiCheckCircle,
} from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setOpenCustomerModel } from "../../../store/SharedStore";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const dispatch = useDispatch();
  return (
    <Sidebar
      // dir="ltr"
      aria-label="Sidebar with multi-level dropdown example"
      className={`h-screen w-100  `}
    >
      <Sidebar.Items className="mt-16">
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            icon={HiChartPie}
            label="ادارة العملاء"
            className="bg-gray-300"
          >
            <Sidebar.Item href="#" icon={HiUser}>
              ادارة العملاء
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUser}
              onClick={() => {
                dispatch(setOpenCustomerModel(true));
              }}
            >
              اضافه العملاء
            </Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse
            icon={HiCheckCircle}
            label="ادارة العقود"
            className=" bg-gray-300 "
          >
            <Sidebar.Item href="#">ادارة العقود</Sidebar.Item>
            {/* <Sidebar.Item href="#">Sales</Sidebar.Item>
    <Sidebar.Item href="#">Refunds</Sidebar.Item>
    <Sidebar.Item href="#">Shipping</Sidebar.Item> */}
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiInbox}
            label="ادارة الموظفين"
            className="  bg-gray-300"
          >
            <Sidebar.Item href="#">ادارة الموظفين</Sidebar.Item>
            {/* <Sidebar.Item href="#">Sales</Sidebar.Item>
    <Sidebar.Item href="#">Refunds</Sidebar.Item>
    <Sidebar.Item href="#">Shipping</Sidebar.Item> */}
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiInbox}
            label="الكتالوج"
            className=" bg-gray-300 "
          >
            <Sidebar.Item href="#" className="bg-gray-200">
              {" "}
              <NavLink to={"gallery"}>اداره الوحدات</NavLink>
            </Sidebar.Item>
            <div onClick={()=>{dispatch}} className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg">
              <span className="">اضافه وحده</span>
              <span className=" m-auto">
                <FaPlus className="  bg-white text-gray-400 " />
              </span>
            </div>
            <div className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg">
              <span className="">فيلا 250-300</span>
            </div>
            <div className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg">
              <span className="">فيلا 300-450</span>
            </div>
            <div className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg">
              <span className="">شقق</span>
            </div>

          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiTable}
            label="الخزنه"
            className="bg-gray-300  "
          >
            <Sidebar.Item href="#">ادارة الخزنه</Sidebar.Item>
            <Sidebar.Item href="#">رواتب الموظفين</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiUser}
            label="الصلاحيات"
            className=" bg-gray-300 "
          >
            <Sidebar.Item href="#">اضافه مستخدم</Sidebar.Item>
            <Sidebar.Item href="#">تعديل مستخدم</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item
            href="#"
            icon={HiArrowSmRight}
            className={"bg-orange-800 text-gray-100"}
          >
            تسجيل خروج
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Aside;
