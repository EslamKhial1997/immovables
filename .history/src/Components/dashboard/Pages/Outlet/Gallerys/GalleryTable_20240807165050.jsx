import React from "react";
import { Button, Table, Dropdown } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setOpenGalleryModel } from "../../../../store/SharedStore";

const GalleryTable = () => {
  const dispatch = useDispatch()
  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen  h-screen ">
      <div className="p-2 grid grid-cols-4 gap-4">
        <div className="grid grid-cols-1 py-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
          <span className=""> كل الوحدات</span>
        </div>
        <div className="grid grid-cols-2 py-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
          <span className="">المساحه (200-295)</span>
          <span className=" m-auto" onClick={()=>{dispatch(setOpenGalleryModel(true))}}>
            <FaPlus className="cursor-pointer  bg-white text-yellow-400 " />
          </span>
        </div>
        <div className="grid grid-cols-2 py-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
          <span className="">المساحه (450-300)</span>
          <span className=" m-auto" onClick={()=>{dispatch(setOpenGalleryModel(true))}}>
            <FaPlus className="cursor-pointer  bg-white text-yellow-400 " />
          </span>
        </div>
        <div className="grid grid-cols-2 py-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
          <span className="">الشقق</span>
          <span className=" m-auto" onClick={()=>{dispatch(setOpenGalleryModel(true))}}>
            <FaPlus className="cursor-pointer  bg-white text-yellow-400 " />
          </span>
        </div>
      </div>
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>السعر</Table.HeadCell>
          <Table.HeadCell>المساحه</Table.HeadCell>
          <Table.HeadCell> الصالات</Table.HeadCell>
          <Table.HeadCell>دورات المياة</Table.HeadCell>
          <Table.HeadCell>عرض الشارع</Table.HeadCell>
          <Table.HeadCell>المطابخ</Table.HeadCell>
          <Table.HeadCell>البلكونات</Table.HeadCell>
          <Table.HeadCell>مصعد</Table.HeadCell>
          <Table.HeadCell>مستودع</Table.HeadCell>
          <Table.HeadCell>غرفه خادمه</Table.HeadCell>
          <Table.HeadCell>النوع</Table.HeadCell>
          <Table.HeadCell>الحاله</Table.HeadCell>
          <Table.HeadCell>الصور</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-center">
          <Table.Row className="bg-white dark:border-warning-700 dark:bg-warning-800">
            <Table.Cell className="whitespace-nowrap font-medium text-warning-900 dark:text-white">
              1562
            </Table.Cell>
            <Table.Cell>300</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>
            <Table.Cell>عميل</Table.Cell>
            <Table.Cell>
              <div className="flex justify-center text-center bg-warning-200 p-2 rounded-lg">
                <Dropdown label="المسوقيين" inline>
                  <Dropdown.Item>محمد</Dropdown.Item>
                  <Dropdown.Item>محمد</Dropdown.Item>
                  <Dropdown.Item>محمد</Dropdown.Item>
                  <Dropdown.Item>محمد</Dropdown.Item>
                </Dropdown>
              </div>
            </Table.Cell>
            <Table.Cell className="grid grid-cols-2  gap-2">
              <Button className="bg-red-600 " size="xs">
                حذف{" "}
              </Button>
              <Button size="xs">تعديل</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-warning-700 dark:bg-warning-800">
            <Table.Cell className="whitespace-nowrap font-medium text-warning-900 dark:text-white">
              1562
            </Table.Cell>
            <Table.Cell>300</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>
            <Table.Cell>عميل</Table.Cell>
            <Table.Cell>
              <div className="flex justify-center text-center bg-warning-200 p-2 rounded-lg">
                <Dropdown label="المسوقيين" inline>
                  <Dropdown.Item>اسلام</Dropdown.Item>
                  <Dropdown.Item>اسلام</Dropdown.Item>
                  <Dropdown.Item>اسلام</Dropdown.Item>
                  <Dropdown.Item>اسلام </Dropdown.Item>
                </Dropdown>
              </div>
            </Table.Cell>
            <Table.Cell className="grid grid-cols-2  gap-2">
              <Button className="bg-red-600 " size="xs">
                حذف
              </Button>
              <Button size="xs">تعديل</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-warning-700 dark:bg-warning-800">
            <Table.Cell className="whitespace-nowrap font-medium text-warning-900 dark:text-white">
              1562
            </Table.Cell>
            <Table.Cell>300</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>
            <Table.Cell>عميل</Table.Cell>
            <Table.Cell>
              <div className="flex justify-center text-center bg-warning-200 p-2 rounded-lg">
                <Dropdown label="المسوقيين" inline>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                </Dropdown>
              </div>
            </Table.Cell>
            <Table.Cell className="grid grid-cols-2  gap-2">
              <Button className="bg-red-600 " size="xs">
                حذف
              </Button>
              <Button size="xs">تعديل</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default GalleryTable;
