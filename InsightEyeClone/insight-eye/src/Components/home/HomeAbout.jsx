import React from 'react'
import aboutImage from '../../Images/Home/aboutImage.jpg'
import aboutImage2 from '../../Images/Home/aboutImage2.jpg'
import aboutThumb from '../../Images/Home/aboutThumb.png'
import aboutDots from '../../Images/Home/aboutDots.png'
import { homeAboutCheckData } from '../../data/home'
import { homeAbout } from '../../data/common'
import { FaCheck } from 'react-icons/fa6'
import Button from '../../cva/Button'

const HomeAbout = () => {
  return (
    <div className='flex justify-between my-44 ms-40 me-28 relative'>
      <div className='w-1/2 relative'>
        <img src={aboutThumb} alt="" className='w-100 absolute -top-12 right-20 -z-10'/>
        <div className='relative'>
           <img src={aboutImage} alt=""  className='w-[510px] h-[590px]'/>
           <div className='absolute -bottom-14 -left-14 bg-white shadow-lg w-[290px] h-[220px] flex items-center justify-center'>
            <img src={aboutImage2} alt=""/>
           </div>
        </div>
      </div>
      <div className='w-1/2'>
        <h1 className='text-xl font-semibold text-secondary mb-4'>About Us</h1>
        <h2 className='text-[45px] font-bold font-blackops'>{homeAbout.aboutTitle}</h2>
        <p className='text-textColor text-lg mt-4'>{homeAbout.aboutDescription}</p>

        <div className='my-8 bg-bgSecondary p-5 relative'>
          <img src={aboutDots} alt="" className='h-32 w-full'/>
          <div className='w-full absolute top-8 grid grid-cols-2 gap-4 '>
              {homeAboutCheckData.map((data) => (
                <div key={data.id} className='flex items-center space-x-4'>
                  <div className='bg-secondary text-white w-5 h-5 flex items-center justify-center rounded-full'><FaCheck /></div>
                  <h3 className='text-titleColor font-semibold font-poppins'>{data.title}</h3>
                </div>))}
          </div>
          
          
        </div>

        <Button variant="primary" size="md">Contact Us</Button>

      </div>
    </div>
  )
}

export default HomeAbout
