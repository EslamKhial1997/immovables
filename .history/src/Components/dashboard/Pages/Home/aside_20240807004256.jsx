import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiTable,
  HiUser,
  HiCheckCircle,
} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCustomerModel } from "../../../store/SharedStore";

const Aside = () => {
  const { SideBar } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch()
  return (
   
  )
}

export default Aside
