
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination } from 'swiper/modules';
const Blogs = () => {
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>asdasdasfasggggggggggggggggggggggggggggggg</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  )
}

export default Blogs
