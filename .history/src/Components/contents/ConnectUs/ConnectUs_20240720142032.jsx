import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'

const ConnectUs = () => {
  return (
    <div>
      <Navbar/>
      <main className="font-content">
          <div className="bg-white text-black text-lg">
            <div className="md:container px-4 m-auto">
              <div className="flex-none px-4 py-8 w-full max-w-full">
                <div className="relative text-center">
                  <h1
                    className="mx-0 mt-0 mb-2 text-3xl font-ge-dinar-medium text-black md:text-4xl lg:text-6xl"
                  
                  >
                    تواصل معنا
                  </h1>
                  <div>
                    <nav className="">
                      <ul className="p-0 m-0">
                        <li className="inline-block my-0 mx-1">
                          <a
                            href="https://almajdiah.com"
                            className="text-lg leading-7 cursor-pointer text-black dark:text-secondary-400"
                            >الرئيسية</a
                          >
                        </li>
                        <li
                          className="inline-block my-0 mx-1"
                          style="list-style: none"
                        >
                          /
                        </li>
                    
                        <li
                          className="inline-block my-0 mx-1"
                          style="list-style: none"
                        >
                          <span className="text-lg leading-7 text-black"
                            >تواصل معنا</span
                          >
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-5 md:gap-12 py-8">
                <div className="col-span-2">
                  <div className="max-w-2xl mb-4">
                    <b>ابقَ على تواصل معنا دائما</b>
                    <br />
                    شكرا لاهتمامك. نحن نؤمن بالإبداع باعتباره أحد القوى الرئيسية
                    للتقدم. إذا كانت لديك أي شكاوى أو استفسارات حول منتجاتنا
                    يرجى الاتصال بالرقم الموحد التالي
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <a
                      href="tel:920011719"
                      className="lg:block text-white bg-primary-500 hover:bg-primary-400 font-acumin-pro px-5 py-2.5 text-center"
                      >920011719</a
                    >
                  </div>
                  <div className="font-ge-dinar-medium pt-2">ساعات العمل</div>
                  <span className="block py-1">من الساعة 9 صباحا الى 8 مساءا</span>
                  <div className="font-ge-dinar-medium pt-2">
                    ساعات عمل المبيعات
                  </div>
                  <span className="block py-1"
                    >ساعات العمل للمبيعات
                    <br />
                    من الساعة 9 صباحا الى 8 مساء</span
                  >
                  <div className="font-ge-dinar-medium pt-2">الموقع</div>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14484.38582489281!2d46.6213184!3d24.8263748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee56fd12e54b3%3A0x9ad1cba7aba95a5c!2z2KfZhNmF2KfYrNiv2YrYqSDYsdmK2LLZitiv2YbYsw!5e0!3m2!1sen!2ssa!4v1671959510253!5m2!1sen!2ssa"
                    className="block py-1"
                    >الرياض - حي القيروان - شمال طريق الملك سلمان</a
                  >
                  <div className="font-ge-dinar-medium pt-2">Follow us</div>
                  <p className="block py-1">
                    ابقى دائماً علي التواصل معنا لمعرفة آخر المستجدات والأنشطة
                    الخاصة بنا وآخر الأخبار والأحداث
                  </p>
                  <div>
                    <div className="flex justify-center" fill="#034452">
                      <div
                        className="flex w-full rtl:space-x-reverse space-x-3 text-black"
                      >
                        <a target="_blank" href="https://twitter.com/almajdiah"
                          ><img
                            src="https://almajdiah.com/images/twitter.png"
                            className="w-7" /></a
                        ><a
                          target="_blank"
                          href="https://www.youtube.com/@almajdiahres"
                          ><img
                            src="https://almajdiah.com/images/youtube.png"
                            className="w-7" /></a
                        ><a
                          target="_blank"
                          href="https://www.instagram.com/almajdiah/"
                          ><img
                            src="https://almajdiah.com/images/instagram.png"
                            className="w-7" /></a
                        ><a
                          target="_blank"
                          href="https://www.linkedin.com/company/13018248/admin/"
                          ><img
                            src="https://almajdiah.com/images/linkedin.png"
                            className="w-7" /></a
                        ><a
                          target="_blank"
                          href="https://www.snapchat.com/add/almajdiah_res?share_id=2F1w_-envU0&amp;locale=en-GB"
                          ><img
                            src="https://almajdiah.com/images/snap.png"
                            className="w-7"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14484.38582489281!2d46.6213184!3d24.8263748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee56fd12e54b3%3A0x9ad1cba7aba95a5c!2z2KfZhNmF2KfYrNiv2YrYqSDYsdmK2LLZitiv2YbYsw!5e0!3m2!1sen!2ssa!4v1671959510253!5m2!1sen!2ssa"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    style="border: 0px"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </main>
      <Footer/>
    </div>
  )
}

export default ConnectUs
