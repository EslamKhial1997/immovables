import React from "react";
import { Button, Table,Dropdown  } from "flowbite-react";
const CustomerTable = () => {
  return (
    <div className="overflow-x-auto ">
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>
            <Table.Cell>عميل</Table.Cell>
            <Table.Cell> 
            <Dropdown dismissOnClick={false} label="My custom item">
      <Dropdown.Item  href="#">
        Home
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://flowbite.com/" target="_blank">
        External link
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://flowbite.com/" target="_blank">
        External link
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://flowbite.com/" target="_blank">
        External link
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://flowbite.com/" target="_blank">
        External link
      </Dropdown.Item>
    </Dropdown></Table.Cell>
            <Table.Cell className="grid grid-cols-2  gap-2"><Button className="bg-red-600 " size="xs" >حذف </Button><Button size="xs">تعديل</Button></Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>
            <Table.Cell>عميل</Table.Cell>
            <Table.Cell>محمد</Table.Cell>
            <Table.Cell className="grid grid-cols-2  gap-2"><Button className="bg-red-600 " size="xs">حذف</Button><Button size="xs">تعديل</Button></Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>
            <Table.Cell>عميل</Table.Cell>
            <Table.Cell>عبدالله</Table.Cell>
            <Table.Cell className="grid grid-cols-2  gap-2"><Button className="bg-red-600 " size="xs">حذف</Button><Button size="xs">تعديل</Button></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomerTable;
