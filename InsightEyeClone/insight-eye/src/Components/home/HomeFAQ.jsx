import React from 'react';
import FAQImage from '../../Images/Home/FAQImage.jpg'
import HomeAccordion from './HomeAccordion';
import { accordionData } from '../../data/home';

const HomeFAQ = () => {
  return (
    <div className='w-full h-screen flex justify-between'>
        <div className='w-1/2 h-4/5 relative z-50'>
            <img src={FAQImage} alt="" className='h-full w-full'/>
            <div className='w-1/2 h-4/5  bg-customGradient absolute bottom-0 -right-14 -z-50'></div>
        </div>
        <div className='bg-gray-100 h-full w-1/2 relative py-20 px-32'>
            <p className='text-xl font-semibold text-secondary py-8'>Faq's</p>
            <h1 className='text-5xl font-blackops '>Frequently Asked Questions</h1>

            <HomeAccordion items={accordionData}/>

        </div>
    </div>
  )
}

export default HomeFAQ
