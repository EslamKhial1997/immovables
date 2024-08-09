import React from "react";
import { Button, Table, Dropdown } from "flowbite-react";
import { FaPlus } from "react-icons/fa";

const GalleryTable = () => {
  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen  h-screen ">
      <div className="p-2 grid grid-cols-4 gap-4">
        <div className="grid grid-cols-2 content-center bg-yellow-400 text-center items-center rounded-lg cursor-default">
         <span className=""> كل الوحدات</span>
          <FaPlus  className="cursor-pointer bg-white text-yellow-400"/>
        </div>
        <Button color="warning">المساحه (200-295)</Button>
        <Button color="warning">المساحه (200-295)</Button>
        <Button color="warning">الشقق</Button>
      </div>
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم العميل</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>رقم الهويه</Table.HeadCell>
          <Table.HeadCell>التليفون</Table.HeadCell>
          <Table.HeadCell>الصلاحيه</Table.HeadCell>
          <Table.HeadCell>المسوقين</Table.HeadCell>
          <Table.HeadCell>الخصائص</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-center">
          <Table.Row className="bg-white dark:border-warning-700 dark:bg-warning-800">
            <Table.Cell className="whitespace-nowrap font-medium text-warning-900 dark:text-white">
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
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
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
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
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
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
