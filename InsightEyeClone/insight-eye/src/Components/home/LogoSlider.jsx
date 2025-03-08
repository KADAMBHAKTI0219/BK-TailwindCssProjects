import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LogoImageSlider } from "../../data/home";

const LogoSlider = () => {
  return (
    <div className="w-full h-[260px] bg-customGradient flex items-center">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {LogoImageSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center">
              <img
                src={slide.image}
                alt={slide.name || `Logo ${slide.id}`}
                className="h-24 w-36 object-contain max-w-full max-h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
