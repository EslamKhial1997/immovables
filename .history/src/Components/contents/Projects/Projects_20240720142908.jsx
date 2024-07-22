import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <main className="font-content">
                <div>
                    <div className="leading-5 bg-secondary-50 dark:bg-secondary-800 bg-cover bg-no-repeat">
                        <div className="relative pt-6 pb-4 lg:pt-16 lg:pb-32">
                            <div className="px-4 mx-auto w-full leading-5">
                                <div className="flex flex-wrap -mx-4 mt-0 text-neutral-500">
                                    <div className="flex-none px-4 mt-0 w-full max-w-full">
                                        <div className="relative text-center">
                                            <h1 className="mx-0 mt-0 mb-2 font-header text-3xl font-ge-dinar-medium text-black md:text-4xl lg:text-6xl">
                                                المشاريع
                                            </h1>
                                            <div>
                                                <nav className="">
                                                    <ul className="p-0 m-0">
                                                        <li className="inline-block my-0 mx-1">
                                                            <a
                                                                href="https://almajdiah.com"
                                                                className="text-lg leading-7 cursor-pointer text-black dark:text-secondary-400"
                                                            >
                                                                الرئيسية
                                                            </a>
                                                        </li>
                                                        <li className="inline-block my-0 mx-1">/</li>

                                                        <li className="inline-block my-0 mx-1">
                                                            <span className="text-lg leading-7 text-black font-header">
                                                                المشاريع
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:container px-4 m-auto">
                        <div className="mt-0 relative bg-white lg:bg-transparent xl:bg-white dark:bg-secondary-900 lg:-mt-28 py-4 md:px-8 lg:px-1 xl:px-8 mb-8 rounded-lg">
                            <div className="hidden lg:grid lg:grid-cols-3 gap-3.5 my-4">
                                <div className="">
                                    <label className="block">
                                        <span className="block mb-1.5 text-lg text-secondary-700 dark:text-secondary-400 font-ge-dinar-medium">
                                            المنطقة
                                        </span>
                                        <select className="shadow-sm block w-full mt-1  py-2 lg:py-3 border border-secondary-200 focus:border-primary-500 focus:ring focus:ring-primary-500">
                                            <option selected="">- يرجى تحديد الإختيار -</option>
                                            <option value="[object Object]">الرياض</option>
                                            <option value="[object Object]">الشرقية</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="">
                                    <label className="block">
                                        <span className="block mb-1.5 text-lg text-secondary-700 dark:text-secondary-400 font-ge-dinar-medium">
                                            المدينة
                                        </span>
                                        <select className="shadow-sm block w-full mt-1  py-2 lg:py-3 border border-secondary-200 focus:border-primary-500 focus:ring focus:ring-primary-500">
                                            <option selected="">- يرجى تحديد الإختيار -</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="">
                                    <label className="block">
                                        <span className="block mb-1.5 text-lg text-secondary-700 dark:text-secondary-400 font-ge-dinar-medium">
                                            الحي
                                        </span>
                                        <select className="shadow-sm block w-full mt-1  py-2 lg:py-3 border border-secondary-200 focus:border-primary-500 focus:ring focus:ring-primary-500">
                                            <option selected="">- يرجى تحديد الإختيار -</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                                <div className="col-span-full">
                                    <div className="flex items-center justify-center pb-5 lg:pb-6">
                                        <span className="text-lg md:text-xl lg:text-2xl mx-3 pb-1 lg:pb-2 border-black cursor-pointer border-b-2 font-bold">
                                            المتاحة
                                        </span>
                                        <span className="text-lg md:text-xl lg:text-2xl mx-3 pb-1 lg:pb-2 border-black cursor-pointer">
                                            القادمة
                                        </span>
                                    </div>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/195"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/JdMRUKEOVoqCHAhtq4E9z0Mj5XlEhKs3CtaCgEug.jpg"
                                                alt="الماجدية ريزدنس 156"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="156"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    156
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - الندى
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/192"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/Msb7hLZsOkTTBrAaAL9yOIhtF8Bm0IxQlbJRKXAV.jpg"
                                                alt="الماجدية ريزدنس 155"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <div></div>
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="155"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    155
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - عرقة
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/183"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/69AsJSBl9F288ujhp9oeUegkHmLWyiw76xBQdYPF.jpg"
                                                alt="الماجدية ريزدنس 147"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="147"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    147
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - النرجس
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/179"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/NKNCOHbRwoleDpQSpwn3qVlrqyVufcXV5a4IdRi9.jpg"
                                                alt="الماجدية ريزدنس 146"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <img
                                                src="https://almajdiah.com/images/discount_label.png"
                                                alt="project sold"
                                                className="absolute -top-1 -left-2 m-auto w-36"
                                            />
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="146"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    146
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - النرجس
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/176"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/Wj4JCLKQ4Lewq1aYkHSocCcBMLiqCFedbnYVbqYb.jpg"
                                                alt="الماجدية ريزدنس 144"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <div>
                                                <img
                                                    src="https://almajdiah.com/images/project-state-on_map-ar.png"
                                                    alt="project sale on map"
                                                    className="absolute -left-2 -top-2 w-36"
                                                />
                                            </div>
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="144"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    144
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - النرجس
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/175"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/LB06FmZXUbbL7ZqgoWAE5vZJnNdCj85Nmx025QSL.jpg"
                                                alt="الماجدية ريزدنس 143"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <img
                                                src="https://almajdiah.com/images/discount_label.png"
                                                alt="project sold"
                                                className="absolute -top-1 -left-2 m-auto w-36"
                                            />
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="143"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    143
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - الحمراء
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/172"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/JUtCUo3GhD7yOwHz6NzVSzaruSRB4fAEbylTCGED.jpg"
                                                alt="الماجدية ريزدنس 140"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <div>
                                                <img
                                                    src="https://almajdiah.com/images/project-state-on_map-ar.png"
                                                    alt="project sale on map"
                                                    className="absolute -left-2 -top-2 w-36"
                                                />
                                            </div>
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="140"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    140
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - النرجس
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/171"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/7VFe9C8a5UgSgD4fF8klD43sAC0t4nr80CcUobs4.jpg"
                                                alt="الماجدية ريزدنس 139C"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="139 C"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    139 C
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - الملقا
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/168"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/F3ofVvmyxwjLE5jnKAnMe2SPltayFozIfB78fho5.jpg"
                                                alt="الماجدية ريزدنس 138"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <img
                                                src="https://almajdiah.com/images/discount_label.png"
                                                alt="project sold"
                                                className="absolute -top-1 -left-2 m-auto w-36"
                                            />
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="138"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    138
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - النزهة
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/163"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/RXUaQocuLaP0mV9SrUg6ltyDRNNzk1jO5mLLUBzR.jpg"
                                                alt="الماجدية ريزدنس 132"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="132"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    132
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - المروج
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="group shadow bg-white overflow-hidden rounded-lg">
                                    <a
                                        className="block mb-2 text-secondary-500"
                                        href="https://almajdiah.com/projects/160"
                                    >
                                        <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                                            <img
                                                src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/V7KaSIpiDdmB16995WRy1mYxDtWC13YzZ68njW1Q.jpg"
                                                alt="الماجدية ريزدنس 129"
                                                className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                                            />
                                            <img
                                                src="https://almajdiah.com/images/discount_label.png"
                                                alt="project sold"
                                                className="absolute -top-1 -left-2 m-auto w-36"
                                            />
                                        </div>
                                        <div className="py-2 px-3 flex justify-between items-center">
                                            <div className="flex content-center items-center">
                                                <img
                                                    src="https://almajdiah.com/images/project-category-1-ar.png"
                                                    className="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                                                    alt="129"
                                                />
                                                <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                                                    129
                                                </span>
                                            </div>
                                            <div className="text-primary-500">
                                                <svg
                                                    className="w-3 xl:w-6 xl:h-6 inline-block"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10.799"
                                                    height="17.247"
                                                    viewBox="0 0 10.799 17.247"
                                                >
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect
                                                                id="Rectangle_13947"
                                                                data-name="Rectangle 13947"
                                                                width="10.799"
                                                                height="17.247"
                                                                fill="currentColor"
                                                            ></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g
                                                        id="Group_11453"
                                                        data-name="Group 11453"
                                                        transform="translate(0 0)"
                                                    >
                                                        <g
                                                            id="Group_11452"
                                                            data-name="Group 11452"
                                                            transform="translate(0 0)"
                                                            clipPath="url(#clip-path)"
                                                        >
                                                            <path
                                                                id="Path_71"
                                                                data-name="Path 71"
                                                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                                                transform="translate(0 0)"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                                                    الرياض - النرجس
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="pb-8 my-2">
                                <div className="md:container px-4 m-auto">
                                    <nav className="max-w-2xl mx-auto text-center text-secondary-800 dark:text-secondary-100 font-acumin-pro">
                                        <div className="flex space-x-2 space-x-reverse justify-center pt-6">
                                            <div>
                                                <button
                                                    className="p-1 md:p-2 bg-secondary-200 dark:bg-secondary-700 min-w-[2rem] md:min-w-[3rem] font-sans hidden xs:inline-block"
                                                    preserve-scroll=""
                                                >
                                                    « السابق
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="p-1 md:p-2 bg-secondary-200 dark:bg-secondary-700 min-w-[2rem] md:min-w-[3rem] !bg-primary-500 !text-white"
                                                    preserve-scroll=""
                                                >
                                                    1
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="p-1 md:p-2 bg-secondary-200 dark:bg-secondary-700 min-w-[2rem] md:min-w-[3rem] font-sans hidden xs:inline-block"
                                                    preserve-scroll=""
                                                >
                                                    التالي »
                                                </button>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="relative">
                                <div
                                    id="map"
                                    className="aspect-[5/4] md:aspect-[5/3] lg:aspect-[5/2.2] mb-8 leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-touch-zoom"
                                    tabIndex="0"
                                    data-gesture-handling-touch-content="Use two fingers to move the map"
                                    data-gesture-handling-scroll-content="Use ctrl + scroll to zoom the map"
                                >
                                    <div className="leaflet-pane leaflet-map-pane">
                                        <div className="leaflet-pane leaflet-tile-pane">
                                            <div className="leaflet-layer">
                                                <div className="leaflet-tile-container leaflet-zoom-animated">
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2578/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2578/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2577/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                   
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2579/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                        style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(518px, 54px, 0px);
                                opacity: 1;
                              "
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2578/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2577/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2579/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2577/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2579/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2576/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2580/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2576/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                        
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2580/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2576/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                    <img
                                                        alt=""
                                                        src="https://tile.thunderforest.com/transport/12/2580/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                                                        className="leaflet-tile leaflet-tile-loaded"
                                                       
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="leaflet-pane leaflet-overlay-pane"></div>
                                        <div className="leaflet-pane leaflet-shadow-pane"></div>
                                        <div className="leaflet-pane leaflet-marker-pane">
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-soon_for_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                              
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                              
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                              
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                              
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                              
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                              
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                              
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                               
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                  
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                   
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(605px, 293px, 0px);
                            z-index: 293;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(460px, 98px, 0px);
                            z-index: 98;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(475px, 91px, 0px);
                            z-index: 91;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(307px, 128px, 0px);
                            z-index: 128;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(447px, 408px, 0px);
                            z-index: 408;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(591px, 299px, 0px);
                            z-index: 299;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(295px, 175px, 0px);
                            z-index: 175;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(294px, 176px, 0px);
                            z-index: 176;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(276px, 300px, 0px);
                            z-index: 300;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(323px, 159px, 0px);
                            z-index: 159;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(593px, 298px, 0px);
                            z-index: 298;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(307px, 128px, 0px);
                            z-index: 128;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(313px, 89px, 0px);
                            z-index: 89;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(618px, 269px, 0px);
                            z-index: 269;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(603px, 310px, 0px);
                            z-index: 310;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(480px, 280px, 0px);
                            z-index: 280;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(314px, 544px, 0px);
                            z-index: 544;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(411px, 508px, 0px);
                            z-index: 508;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(629px, 265px, 0px);
                            z-index: 265;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(520px, 230px, 0px);
                            z-index: 230;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(309px, 110px, 0px);
                            z-index: 110;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(316px, 93px, 0px);
                            z-index: 93;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(293px, 192px, 0px);
                            z-index: 192;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(613px, 289px, 0px);
                            z-index: 289;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(299px, 188px, 0px);
                            z-index: 188;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(763px, 369px, 0px);
                            z-index: 369;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(329px, 159px, 0px);
                            z-index: 159;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(668px, 341px, 0px);
                            z-index: 341;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(330px, 468px, 0px);
                            z-index: 468;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(592px, 294px, 0px);
                            z-index: 294;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(422px, 373px, 0px);
                            z-index: 373;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(332px, 141px, 0px);
                            z-index: 141;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(298px, 173px, 0px);
                            z-index: 173;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(605px, 300px, 0px);
                            z-index: 300;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(640px, 319px, 0px);
                            z-index: 319;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(640px, 291px, 0px);
                            z-index: 291;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(329px, 434px, 0px);
                            z-index: 434;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(462px, 97px, 0px);
                            z-index: 97;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(553px, 188px, 0px);
                            z-index: 188;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(299px, 174px, 0px);
                            z-index: 174;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(359px, 225px, 0px);
                            z-index: 225;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(511px, 97px, 0px);
                            z-index: 97;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(420px, 285px, 0px);
                            z-index: 285;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(730px, 163px, 0px);
                            z-index: 163;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(465px, 96px, 0px);
                            z-index: 96;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(591px, 293px, 0px);
                            z-index: 293;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(280px, 553px, 0px);
                            z-index: 553;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(305px, 175px, 0px);
                            z-index: 175;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(549px, 160px, 0px);
                            z-index: 160;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(246px, 590px, 0px);
                            z-index: 590;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(254px, 304px, 0px);
                            z-index: 304;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(546px, 432px, 0px);
                            z-index: 432;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(667px, 250px, 0px);
                            z-index: 250;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(426px, 119px, 0px);
                            z-index: 119;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(485px, 299px, 0px);
                            z-index: 299;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(777px, 364px, 0px);
                            z-index: 364;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(398px, 112px, 0px);
                            z-index: 112;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(489px, 86px, 0px);
                            z-index: 86;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(395px, 104px, 0px);
                            z-index: 104;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(621px, 288px, 0px);
                            z-index: 288;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(694px, 368px, 0px);
                            z-index: 368;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(317px, 66px, 0px);
                            z-index: 66;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(652px, 347px, 0px);
                            z-index: 347;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(323px, 76px, 0px);
                            z-index: 76;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(360px, 192px, 0px);
                            z-index: 192;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(620px, 282px, 0px);
                            z-index: 282;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(273px, 108px, 0px);
                            z-index: 108;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(399px, -65px, 0px);
                            z-index: -65;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(458px, 289px, 0px);
                            z-index: 289;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-sold.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(431px, -75px, 0px);
                            z-index: -75;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(520px, 333px, 0px);
                            z-index: 333;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(422px, -71px, 0px);
                            z-index: -71;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-soon_for_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(626px, 330px, 0px);
                            z-index: 330;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(359px, 214px, 0px);
                            z-index: 214;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-soon_for_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(362px, 213px, 0px);
                            z-index: 213;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(464px, -6px, 0px);
                            z-index: -6;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(815px, 269px, 0px);
                            z-index: 269;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(459px, -17px, 0px);
                            z-index: -17;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(462px, -10px, 0px);
                            z-index: -10;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(397px, -124px, 0px);
                            z-index: -124;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(265px, 547px, 0px);
                            z-index: 547;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                                                style="
                            margin-left: -6px;
                            margin-top: -6px;
                            width: 12px;
                            height: 12px;
                            transform: translate3d(568px, 181px, 0px);
                            z-index: 181;
                          "
                                            >
                                                <img
                                                    
                                                    src="images/pin-under_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                            <div
                                                className="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                                                tabIndex="0"
                                                role="button"
                              
                                            >
                                                <img
                                                    
                                                    src="images/pin-soon_for_sale.png?v=0.3"
                                                    alt="project icon status"
                                                />
                                            </div>
                                        </div>
                                        <div className="leaflet-pane leaflet-tooltip-pane"></div>
                                        <div className="leaflet-pane leaflet-popup-pane"></div>
                                        <div className="leaflet-proxy leaflet-zoom-animated"></div>
                                    </div>
                                    <div className="leaflet-control-container">
                                        <div className="leaflet-top leaflet-left">
                                            <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                                                <a
                                                    className="leaflet-control-zoom-in"
                                                    href="#"
                                                    title="Zoom in"
                                                    role="button"
                                                    aria-label="Zoom in"
                                                    aria-disabled="false"
                                                >
                                                    <span aria-hidden="true">+</span>
                                                </a>
                                                <a
                                                    className="leaflet-control-zoom-out"
                                                    href="#"
                                                    title="Zoom out"
                                                    role="button"
                                                    aria-label="Zoom out"
                                                    aria-disabled="false"
                                                >
                                                    <span aria-hidden="true">−</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="leaflet-top leaflet-right"></div>
                                        <div className="leaflet-bottom leaflet-left"></div>
                                        <div className="leaflet-bottom leaflet-right">
                                            <div className="leaflet-control-attribution leaflet-control">
                                                <a
                                                    href="https://leafletjs.com"
                                                    title="A JavaScript library for interactive maps"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="8"
                                                        viewBox="0 0 12 8"
                                                        className="leaflet-attribution-flag"
                                                    >
                                                        <path fill="#4C7BE1" d="M0 0h12v4H0z"></path>
                                                        <path fill="#FFD500" d="M0 4h12v3H0z"></path>
                                                        <path fill="#E0BC00" d="M0 7h12v1H0z"></path>
                                                    </svg>
                                                    Leaflet
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-0 right-0 z-[1] bg-white p-2 m-2"
                                    dir="rtl"
                                >
                                    <div className="py-1">
                                        <input
                                            type="radio"
                                            id="all"
                                            className="checked:bg-black"
                                            value="all"
                                        />
                                        <img
                                            src="https://almajdiah.com/images/pin-all.png"
                                            className="inline-block h-6 mx-2"
                                            alt="الكل"
                                        />
                                        <span className="inline-block px-2 cursor-pointer">
                                            الكل
                                        </span>
                                    </div>
                                    <div className="py-1">
                                        <input
                                            type="radio"
                                            id="under_sale"
                                            className="checked:bg-black"
                                            value="under_sale"
                                        />
                                        <img
                                            src="https://almajdiah.com/images/pin-under_sale.png"
                                            className="inline-block h-6 mx-2"
                                            alt="للبيع"
                                        />
                                        <span className="inline-block px-2 cursor-pointer">
                                            متاحة
                                        </span>
                                    </div>
                                    <div className="py-1">
                                        <input
                                            type="radio"
                                            id="soon_for_sale"
                                            className="checked:bg-black"
                                            value="soon_for_sale"
                                        />
                                        <img
                                            src="https://almajdiah.com/images/pin-soon_for_sale.png"
                                            className="inline-block h-6 mx-2"
                                            alt="قريبا للبيع"
                                        />
                                        <span className="inline-block px-2 cursor-pointer">
                                            قادمة
                                        </span>
                                    </div>
                                    <div className="py-1">
                                        <input
                                            type="radio"
                                            id="sold"
                                            className="checked:bg-black"
                                            value="sold"
                                        />
                                        <img
                                            src="https://almajdiah.com/images/pin-sold.png"
                                            className="inline-block h-6 mx-2"
                                            alt="مباع"
                                        />
                                        <span className="inline-block px-2 cursor-pointer">
                                            مباعة
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
