import React from 'react'
import { carouselData } from '../../data/home'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import carouselCenter from '../../Images/Home/carouselCenter.png';
import ThumbCarousel from '../../Images/Home/ThumbCarousel.png';
import carouselDots from '../../Images/Home/carouselDots.png';
import { BsFillCollectionFill } from 'react-icons/bs';
import Button from '../../cva/Button';


const Carousel = () => {
    const carouselLowerData =[
        {
            id: 1,
            title: "Collect ALL Evidence",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis quos accusamus.",
            icons:<BsFillCollectionFill />,
        },
        {
            id: 2,
            title: "Strong investigation team",
            description: "Amet minim mollit no duis sit enim aliqua dolor do amet officia.",
            icons:<BsFillCollectionFill />,
        }
    ]




 return (
    <div className="w-full relative">
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}

            loop={true}
        >
            {carouselData.map((slide) => (
            <SwiperSlide key={slide.id}>
                <div className="relative w-full h-screen">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                />
                <img src={carouselDots} alt="" className='absolute bottom-0 right-0 w-50'/>

                    <div className="absolute top-0 left-0 w-1/2 h-full bg-black bg-opacity-65 "></div>
                    <img src={ThumbCarousel} alt="" className='absolute top-0 left-20' />
                
                <div className='absolute left-[40%] bottom-0'>
                        <img src={carouselCenter} alt="" className='h-screen w-full'/>
                    </div>
                    <div className='absolute top-32 left-20 text-white p-8 w-1/2'>
                    <p className='font-semibold text-2xl py-4'>{slide.subTitle}</p>
                    <h1 className='font-bold font-blackops text-7xl '>{slide.title}</h1>
                    <p className='text-lg py-4'>{slide.description}</p>
                     <Button variant="primary" size="lg">Discover More</Button>
                    </div>
                </div>
            
            </SwiperSlide>
            
            ))}
            
        </Swiper>
        <div className='absolute -bottom-64 left-0 w-full h-1/2 z-50'>
            <div className='max-w-7xl  m-auto  bg-white p-10 shadow-lg'>
                <div className='flex justify-around'>
                    {carouselLowerData.map((data) => (
                        <div key={data.id} className='flex items-center space-x-4 w-[45%] bg-gray-100 p-4'>
                            <span className='text-4xl text-secondary mx-10  p-4 bg-white hover:text-white hover:bg-customGradient rounded-full border-2'>{data.icons}</span>
                            <div>
                                <h1 className='font-bold'>{data.title}</h1>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Carousel
