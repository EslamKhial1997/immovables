import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-black bg-logo bg-[length:200px] bg-left-bottom bg-repeat-x font-content">
    <div class="mx-auto max-w-screen-xl py-8">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-6 md:mb-0">
          <a class="flex items-center" href="https://almajdiah.com/"><img
              src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/VmyJSVcSg346Kz5TFlSLDFnZtTgzbF5hdcZnS21G.png"
              class="mr-3 h-16 invert brightness-0" alt=" Logo" /></a>
          <p class="max-w-[440px] text-sm text-secondary-100 p-3 block">
            نهتم في الماجدية ريزيدنس بإثبات دورنا الفعّال وحِرصِنا على
            تقديم تسهيلات تُساهم في تحقيق الرؤية 2030 م. بدايةً من
            اهتمامنا باختيار مُخططات ذات بنية تحتية مُتكاملة ومُجهزة
            لمُباشرة البناء.
          </p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4">
          <div>
            <h2 class="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-secondary-100">
              روابط هامة
            </h2>
            <ul class="text-gray-200 dark:text-gray-400">
              <li class="mb-2">
                <a class="text-secondary-200" aria-current="page" href="https://almajdiah.com/projects">المشاريع</a>
              </li>
              <li class="mb-2">
                <a class="text-secondary-200" aria-current="page" href="https://almajdiah.com/rentals">وحدات
                  للإيجار</a>
              </li>
              <li class="mb-2">
                <a class="text-secondary-200" aria-current="page" href="https://almajdiah.com/blog">المدونة</a>
              </li>
              <li class="mb-2">
                <a class="text-secondary-200" aria-current="page" href="https://almajdiah.com/about-us">من نحن</a>
              </li>
              <li class="mb-2">
                <a class="text-secondary-200" aria-current="page" href="https://almajdiah.com/privacy-policy">سياسة
                  الخصوصية</a>
              </li>
              <li class="mb-2">
                <a class="text-secondary-200" aria-current="page"
                  href="https://almajdiah.com/intellectual-property-rights">حقوق الملكية الفكرية</a>
              </li>
              <li class="mb-2">
                <a class="text-secondary-200" aria-current="page" href="https://almajdiah.com/terms">شروط
                  الإستخدام</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-secondary-100">
              تواصل معنا
            </h2>
            <ul>
              <li class="text-secondary-200 text-sm font-acumin-pro">
                <a href="tel:920011719">920011719</a>
              </li>
            </ul>
          </div>
          <div class="col-span-full lg:col-span-1">
            <h2 class="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-secondary-100">
              تابعنا على
            </h2>
            <div class="flex w-full rtl:space-x-reverse space-x-3 text-secondary-200">
              <a target="_blank" href="https://twitter.com/almajdiah"><img
                  src="https://almajdiah.com/images/twitter.png" class="w-7 invert brightness-0"
                  alt="almajdiah twitter" /></a><a target="_blank" href="https://www.youtube.com/@almajdiahres"><img
                  src="https://almajdiah.com/images/youtube.png" class="w-7 invert brightness-0"
                  alt="almajdiah youtube" /></a><a target="_blank" href="https://www.instagram.com/almajdiah/"><img
                  src="https://almajdiah.com/images/instagram.png" class="w-7 invert brightness-0"
                  alt="almajdiah instagram" /></a><a target="_blank"
                href="https://www.linkedin.com/company/13018248/admin/"><img
                  src="https://almajdiah.com/images/linkedin.png" class="w-7 invert brightness-0"
                  alt="almajdiah linkedin" /></a><a target="_blank"
                href="https://www.snapchat.com/add/almajdiah_res?share_id=2F1w_-envU0&amp;locale=en-GB"><img
                  src="https://almajdiah.com/images/snap.png" class="w-7 invert brightness-0"
                  alt="almajdiah snapchat" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:flex sm:items-center sm:justify-between bg-black bg-waves">
      <div class="container m-auto text-center py-4">
        <span class="text-sm text-secondary-200">جميع الحقوق محفوظة © <span class="font-acumin-pro">2022</span>
          <a class="hover:underline" href="https://almajdiah.com/">الماجدية ريزدنس</a>.
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
