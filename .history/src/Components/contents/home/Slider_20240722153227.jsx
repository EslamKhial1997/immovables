import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../../assets/available/image10.jpg"
import slide2 from "../../../assets/available/image11.jpg"
import slide3 from "../../../assets/available/image9.jpg"
import slide4 from "../../../assets/available/image8.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='w-100'>
       <Swiper
       width={"100%"}
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
        <SwiperSlide className='flex'><img className='w-100 h-100 object-cover' src={slide1} alt="" srcSet="Slider" /></SwiperSlide>
        <SwiperSlide className='flex'><img className='w-100 h-100 object-cover' src={slide2} alt="" srcSet="Slider" /></SwiperSlide>
        <SwiperSlide className='flex'><img className='w-100 h-100 object-cover' src={slide3} alt="" srcSet="Slider" /></SwiperSlide>
        <SwiperSlide className='flex'><img className='w-100 h-100 object-cover' src={slide4} alt="" srcSet="Slider" /></SwiperSlide>
        <SwiperSlide className='flex'><img className='w-100 h-100 object-cover' src={slide1} alt="" srcSet="Slider" /></SwiperSlide>
      
      </Swiper>
  
  )
}

export default Slider
