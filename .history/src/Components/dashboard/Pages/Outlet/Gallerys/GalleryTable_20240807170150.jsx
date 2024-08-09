import React from "react";
import { Button, Table, Dropdown } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setOpenGalleryModel } from "../../../../store/SharedStore";

const GalleryTable = () => {
  const dispatch = useDispatch();
  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen  h-screen ">
      <div className="p-2 grid grid-cols-4 gap-4">
        <div className="grid grid-cols-auto py-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
          <span className=""> كل الوحدات</span>
        </div>
        <div className="grid grid-cols-2 py-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
          <span className="">المساحه (200-295)</span>
          <span
            className=" m-auto"
            onClick={() => {
              dispatch(setOpenGalleryModel(true));
            }}
          >
            <FaPlus className="cursor-pointer  bg-white text-yellow-400 " />
          </span>
        </div>
        <div className="grid grid-cols-2 py-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
          <span className="">المساحه (450-300)</span>
          <span
            className=" m-auto"
            onClick={() => {
              dispatch(setOpenGalleryModel(true));
            }}
          >
            <FaPlus className="cursor-pointer  bg-white text-yellow-400 " />
          </span>
        </div>
        <div className="grid grid-cols-2 py-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
          <span className="">الشقق</span>
          <span
            className=" m-auto"
            onClick={() => {
              dispatch(setOpenGalleryModel(true));
            }}
          >
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
            <Table.Cell>2</Table.Cell>
            <Table.Cell>125م</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell className="grid grid-cols-auto  gap-2">
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-green-600 " size="xs">
                نعم{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>شقه</Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-green-600 " size="xs">
                متاح{" "}
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-warning-700 dark:bg-warning-800">
            <Table.Cell className="whitespace-nowrap font-medium text-warning-900 dark:text-white">
              1562
            </Table.Cell>
            <Table.Cell>300</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>125م</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell className="grid grid-cols-auto  gap-2">
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell className="grid grid-cols-auto  gap-2">
              {" "}
              <Button className="bg-green-600 " size="xs">
                نعم{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>فيلا</Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-green-600 " size="xs">
                متاح{" "}
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-warning-700 dark:bg-warning-800">
            <Table.Cell className="whitespace-nowrap font-medium text-warning-900 dark:text-white">
              1562
            </Table.Cell>
            <Table.Cell>300</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>125م</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell className="grid grid-cols-auto  gap-2">
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>فيلا</Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-green-600 " size="xs">
                متاح{" "}
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-warning-700 dark:bg-warning-800">
            <Table.Cell className="whitespace-nowrap font-medium text-warning-900 dark:text-white">
              1562
            </Table.Cell>
            <Table.Cell>300</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>125م</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell className="grid grid-cols-auto  gap-2">
              <Button className="bg-green-600 " size="xs">
                نعم{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-red-600 " size="xs">
                لا{" "}
              </Button>
            </Table.Cell>
            <Table.Cell>شقه</Table.Cell>
            <Table.Cell>
              {" "}
              <Button className="bg-green-600 " size="xs">
                متاح{" "}
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default GalleryTable;
