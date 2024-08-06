import React from 'react'

const Navbar = () => {
  return (
    <Sidebar
    dir="ltr"
    aria-label="Sidebar with multi-level dropdown example"
    className="h-screen  "
  >
    <Sidebar.Items className="mt-16">
      <Sidebar.ItemGroup>
        <Sidebar.Collapse
          icon={HiChartPie}
          label="ادارة العملاء"
          className="bg-gray-300"
        >
          <Sidebar.Item href="#">ادارة العملاء</Sidebar.Item>
          {/* <Sidebar.Item href="#">Sales</Sidebar.Item>
    <Sidebar.Item href="#">Refunds</Sidebar.Item>
    <Sidebar.Item href="#">Shipping</Sidebar.Item> */}
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
          <Sidebar.Item href="#">فيلا 200-295</Sidebar.Item>
          <Sidebar.Item href="#">فيلا 300-450</Sidebar.Item>
          <Sidebar.Item href="#">شقق</Sidebar.Item>
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
  )
}

export default Navbar
