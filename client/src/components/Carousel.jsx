import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"> {/* Adjust height as needed */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={800}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src="slide1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="slide2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="slide3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="slide4.jpg"
            alt="Slide 4"
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
