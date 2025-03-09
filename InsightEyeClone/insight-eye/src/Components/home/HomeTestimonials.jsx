import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { homeTestimonial } from '../../data/home';
import aboutThumb from "../../Images/Home/aboutThumb.png"
import testimonial1 from '../../Images/Home/testimonial1.jpg'

const HomeTestimonials = () => {
  return (
    <div className='w-full h-screen my-28 flex items-center'>
      <div className='ms-32 w-1/2'>
        <h1 className='text-xl text-secondary font-semibold'>Our Testimonals</h1>
                   <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
            
                        loop={true}
                    >
                        {homeTestimonial.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className='w-2/3 py-10'>
                                <h1 className='text-2xl font-bold pb-4'>{slide.description}</h1>
                                <span>⭐⭐⭐⭐⭐</span>
                                <div className='flex py-10 border-t-2 mt-10'>
                                    <img src={slide.image} alt="" className='rounded-full'/>
                                    
                                    <div className='px-6'>
                                        <h1 className='font-bold text-2xl'>{slide.author}</h1>
                                        <p className='text-xl text-textColor'>{slide.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        ))}
                        
                    </Swiper>
      </div>
      <div className='me-32 w-1/2 relative' >
      <img src={aboutThumb} alt="" className='absolute -top-14 -left-10 -z-50'/>
        <div className='relative w-full h-full'>
            <img src={testimonial1} alt="" className='w-full h-full'/>
            <div className='bg-red-100 w-full h-full absolute top-10 -right-10 -z-50'></div>
        </div>
        
      </div>
    </div>
  )
}

export default HomeTestimonials
