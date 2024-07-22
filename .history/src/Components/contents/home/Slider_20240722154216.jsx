import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "./imagesSlide/image10.jpg"
import slide2 from "./imagesSlide/image11.jpg"
import slide3 from "./imagesSlide/image3.jpg"
import slide4 from "./imagesSlide/image5.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
   
       <Swiper
      
      
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"100vh"}}><img src={slide1} alt=""  /></SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}><img src={slide2} alt=""  /></SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}><img src={slide3} alt=""  /></SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}><img src={slide4} alt=""  /></SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}><img src={slide1} alt=""  /></SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}>Slide 8</SwiperSlide>
      </Swiper>
  
  )
}

export default Slider
