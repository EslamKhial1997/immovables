import React from 'react'

const OurAchievements = () => {
  return (
    <section class="bg-black mb-8 py-8 lg:py-16">
          <div class="container m-auto">
            <div class="text-center pb-10">
              <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-ge-dinar-medium pb-2">
                إنــجـــازاتـنــــا
              </h2>
              <img src="https://almajdiah.com/images/divid-bg.png" class="h-3 w-36 lg:h-4 lg:w-44 inline-block m-auto"
                alt="divid" />
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4 text-white text-center">
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/4kf65Z9fTnQsijmhK7MDjYf7lj2h7apWCmNOfVCR.png"
                  class="w-16 lg:w-24 m-auto" alt="متر مربع تم تطويره" /><span
                  class="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl">2,000,000</span><span
                  class="block text-lg lg:text-xl">متر مربع تم تطويره</span>
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/4ba55kXy8YXj6TbOnGvVcr0j9tc9bTvIEvo3Wm6o.png"
                  class="w-16 lg:w-24 m-auto" alt="سكان الماجدية ريزدنس" /><span
                  class="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl">60,000+</span><span
                  class="block text-lg lg:text-xl">سكان الماجدية ريزدنس</span>
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/KLr8OMvbwCIhzQhIA0lWQYBigfjTbDlOsHIlYrD8.png"
                  class="w-16 lg:w-24 m-auto" alt="مبنى تم إنشاؤه" /><span
                  class="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl">1000+</span><span
                  class="block text-lg lg:text-xl">مبنى تم إنشاؤه</span>
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/2Bgukif3susFKO2w8A6cUii0bsH76iyxaiuRYEdP.png"
                  class="w-16 lg:w-24 m-auto" alt="وحدة سكنية" /><span
                  class="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl">15,000+</span><span
                  class="block text-lg lg:text-xl">وحدة سكنية</span>
              </div>
            </div>
          </div>
        </section>
  )
}

export default OurAchievements
