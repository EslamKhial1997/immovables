import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-black bg-logo bg-[length:200px] bg-left-bottom bg-repeat-x font-content">
      <div className="mx-auto max-w-screen-xl py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-16 invert brightness-0"
               
                alt=" Logo"
              />
            </a>
            <p className="max-w-[440px] text-sm text-gray-100 p-3 block">
              نهتم في الموافقة ريزيدنس بإثبات دورنا الفعّال وحِرصِنا على تقديم
              تسهيلات تُساهم في تحقيق الرؤية 2030 م. بدايةً من اهتمامنا باختيار
              مُخططات ذات بنية تحتية مُتكاملة ومُجهزة لمُباشرة البناء.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4">
            <div>
              <h2 className="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-gray-100">
                روابط هامة
              </h2>
              <ul className="text-gray-200 dark:text-gray-400">
                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    المشاريع
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    وحدات للإيجار
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    المدونة
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    من نحن
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    سياسة الخصوصية
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    حقوق الملكية الفكرية
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    شروط الإستخدام
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-gray-100">
                تواصل معنا
              </h2>
              <ul >
                <li className="text-gray-200 text-sm font-acumin-pro ">
              .float-button {
        text-decoration: none;
        position: fixed;
        padding: 10px;
        padding-right: 15px;
        bottom: 30px;
        right: 30px;
        color: #fff;
        background-color:#25D366;
        border-radius: 25px 30px 5px 25px;
        z-index: 100;
        font-family: Arial;
        font-size: 17px;
        animation: whatsapp-animation 0.5s ease-in-out;
        box-shadow: 1px 2px 5px 2px rgba(30,30,30,0.3);
        transition:all 0.3s ease-out;
    }

    .float-button:hover {
         background-color: #128C7E;
          color: #fff;
    }

    .fa-whatsapp {
        font-size: 20px !important;
        padding-right: 5px;
        padding-left: 5px;
    }

    @keyframes whatsapp-animation {
        from {
            opacity: 0%;
        }

        to {
            opacity: 100%
        }
    }

    @media screen and (max-width: 545px) {
        span {
            display: none;
        }

        .float-button {
            bottom: 15px;
            right: 15px;
            width: 20px;
            border-radius: 20px 20px 5px 20px;
        }

        .fa-whatsapp {
            font-size: 22px !important;
            padding: 4px;
        }
    }
                </li>
              </ul>
            </div>
            <div className="col-span-full lg:col-span-1">
              <h2 className="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-gray-100">
                تابعنا على
              </h2>
              <div className="flex w-full rtl:space-x-reverse space-x-3 text-gray-200">
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/twitter.png"
                    className="w-7 invert brightness-0"
                    alt="#"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/youtube.png"
                    className="w-7 invert brightness-0"
                    alt="almajdiah youtube"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/instagram.png"
                    className="w-7 invert brightness-0"
                    alt="almajdiah instagram"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/linkedin.png"
                    className="w-7 invert brightness-0"
                    alt="almajdiah linkedin"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/snap.png"
                    className="w-7 invert brightness-0"
                    alt="almajdiah snapchat"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between bg-black bg-waves">
        <div className="container m-auto text-center py-4">
          <span className="text-sm text-gray-200">
            جميع الحقوق محفوظة © <span className="font-acumin-pro">2022</span>
            <a className="hover:underline">الموافقة ريزدنس</a>.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
