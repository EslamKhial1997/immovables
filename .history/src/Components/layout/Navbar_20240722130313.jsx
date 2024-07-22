import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <nav className="bg-black shadow-lg z-[99999] font-header font-bold sticky top-0 w-full">
      <div className="md:container px-4 m-auto">
        <div className="flex justify-between h-16 lg:h-20">
          <div className="flex grow">
            <div className="w-40 xl:w-64">
              <a href="https://almajdiah.com" className="block h-full py-2">
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/VmyJSVcSg346Kz5TFlSLDFnZtTgzbF5hdcZnS21G.png"
                  alt="home"
                  className="lg:w-full xl:w-auto h-full brightness-0 invert"
                />
              </a>
            </div>
            <div className="hidden grow flex-shrink lg:flex space-x-reverse space-x-4 mx-8">
              <NavLink to={"/"}
                className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition text-primary-500"
                href="https://almajdiah.com/"
              >
                الرئيسية
              </NavLink>
              <a
                className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                href="https://almajdiah.com/projects"
              >
                المشاريع
              </a>

              <a
                className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                href="https://almajdiah.com/blog"
              >
                المدونة
              </a>
              <a
                className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                href="https://almajdiah.com/about-us"
              >
                من نحن
              </a>
              <a
                className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                href="https://almajdiah.com/contact-us"
              >
                تواصل معنا
              </a>
            </div>
            <div className="hidden grow lg:flex justify-end items-center rtl:space-x-reverse space-x-4 text-primary-500 relative">
              <a
                className="p-1 leading-[10px] text-gray-50"
                href="https://almajdiah.com/compare"
              >
                <svg
                  className="w-6 h-6 text-primary-500 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <defs></defs>
                  <title>مقارنة</title>
                  <path
                    d="M28,6H18V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V24a2,2,0,0,0,2,2H14v2a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,15h6.17L7.59,17.59,9,19l5-5L9,9,7.59,10.41,10.17,13H4V4H16V24H4ZM16,28V26a2,2,0,0,0,2-2V8H28v9H21.83l2.58-2.59L23,13l-5,5,5,5,1.41-1.41L21.83,19H28v9Z"
                    transform="translate(0)"
                  ></path>
                  <div
                    id="_Transparent_Rectangle_"
                    data-name="<Transparent Rectangle>"
                    className="cls-1"
                    width="32"
                    height="32"
                  ></div>
                </svg>
                <br />
                مقارنة
              </a>
              <a
                className="p-1 text-center leading-[10px] text-gray-50"
                href="https://almajdiah.com/login"
              >
                <svg
                  className="w-6 h-6 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <defs></defs>
                  <title>user--filled</title>
                  <path
                    d="M6,30H26V25a7.0082,7.0082,0,0,0-7-7H13a7.0082,7.0082,0,0,0-7,7Z"
                    transform="translate(0 0)"
                  ></path>
                  <path
                    d="M9,9a7,7,0,1,0,7-7A7,7,0,0,0,9,9Z"
                    transform="translate(0 0)"
                  ></path>
                  <div
                    id="_Transparent_Rectangle_"
                    data-name="<Transparent Rectangle>"
                    className="cls-1"
                    width="32"
                    height="32"
                  ></div>
                </svg>
                <br />
                دخول
              </a>
            </div>
          </div>
          <div
            className="-mr-2 flex-shrink-0 flex items-center lg:hidden"
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            <button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <img
                src="https://almajdiah.com/images/menu-bars.png"
                className="w-6"
                alt="menu bars"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={hidden ? "" : "hidden"}>
        <div className="pt-2 pb-3 space-y-1 px-3">
          <a
            className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition text-primary-500"
            href="https://almajdiah.com/"
          >
            الرئيسية
          </a>
          <a
            className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
            href="https://almajdiah.com/projects"
          >
            المشاريع
          </a>

          <a
            className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
            href="https://almajdiah.com/blog"
          >
            المدونة
          </a>
          <a
            className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
            href="https://almajdiah.com/about-us"
          >
            من نحن
          </a>
          <a
            className="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
            href="https://almajdiah.com/contact-us"
          >
            تواصل معنا
          </a>
          <a
            className="p-1 block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition p-1"
            href="https://almajdiah.com/login"
          >
            تسجيل الدخول
          </a>
          <a
            className="flex items-center block py-3 px-3 lg:inline-flex lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition flex"
            href=""
          >
            <div className="block">
              <svg
                className="svg-inline--fa fa-globe text-xl mx-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="globe"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className=""
                  fill="currentColor"
                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                ></path>
              </svg>
              AR
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
