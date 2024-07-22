import React from "react";

const OurProjects = () => {
  return (
    <section className="my-8">
      <div className="md:container px-4 m-auto">
        <div className="text-center mb-3 lg:mb-5">
          <svg
            className="inline-block w-6 h-6 lg:w-10 lg:h-10"
            xmlns="http://www.w3.org/2000/svg"
              
            width="12"
            height="17.433"
            viewBox="0 0 12 17.433"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_14058"
                  data-name="Rectangle 14058"
                  width="12"
                  height="17.433"
                  fill="none"
                  stroke="#707070"
                  strokeWidth="0.75"
                ></rect>
              </clipPath>
            </defs>
            <g
              id="Group_11582"
              data-name="Group 11582"
              transform="translate(0 0)"
            >
              <g
                id="Group_11581"
                data-name="Group 11581"
                transform="translate(0 0)"
                clipPath="url(#clip-path)"
              >
                <line
                  id="Line_153"
                  data-name="Line 153"
                  y1="10.531"
                  x2="7.951"
                  transform="translate(3.941 0.081)"
                  fill="none"
                  stroke="#a4874c"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></line>
                <line
                  id="Line_154"
                  data-name="Line 154"
                  y1="10.531"
                  x2="7.951"
                  transform="translate(0.107 6.821)"
                  fill="none"
                  stroke="#a4874c"
                  strokeMiterlimit="10"
                  strokeWidth="0.75"
                ></line>
              </g>
            </g>
          </svg>
          <h1 className="inline-block text-xl font-header md:text-2xl px-1.5 lg:text-4xl font-ge-dinar-medium leading-none text-black dark:text-white">
            مشاريعنا
          </h1>
        </div>
        <div className="flex items-center justify-center pb-5 lg:pb-6">
          <span className="text-lg md:text-xl font-header lg:text-2xl mx-3 pb-1 lg:pb-2 border-black cursor-pointer border-b-2 font-bold">
            المتاحة
          </span>
          <span className="text-lg md:text-xl font-header lg:text-2xl mx-3 pb-1 lg:pb-2 border-black cursor-pointer">
            القادمة
          </span>
          <span className="text-lg md:text-xl font-header lg:text-2xl mx-3 pb-1 lg:pb-2 border-black cursor-pointer">
            للإيجار
          </span>
        </div>

        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">



            </div>
            </div>




        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
          <div className="mt-4 lg:my-8 text-center">
            <a
              className="text-black dark:text-white text-base lg:text-xl py-1 lg:py-2 px-4 lg:px-6 border border-black dark:border-white inline-block"
              href="https://almajdiah.com/projects"
            >
              مزيد من المشاريع
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
