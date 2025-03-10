import React from 'react'
import aboutThumb from '../../Images/Home/aboutThumb.png'
import {homeService2} from '../../data/common'
import Button from '../../cva/Button'
import icons1 from '../../Images/Home/icons1.svg'
import icons2 from '../../Images/Home/icons2.svg'
import icons3 from '../../Images/Home/icons3.svg'


const HomeServices2  = () => {
  return (
    <div className='max-w-7xl h-[120vh] relative'>
        <div className=' relative'>
        <div className="w-96 h-96 border-gray-100 border-[50px] rounded-full absolute -top-20 -left-10 -z-50 animate-animationScale">
            <div>
                <img src={aboutThumb} alt="" className='absolute bottom-10 right-10 animate-animationRotate'/>
            </div>
        </div>
        
        </div>
        <div className='flex max-w-6xl justify-between mx-auto absolute top-64 left-28'>
            <div className='w-1/2'>
                <h2 className='text-xl font-semibold text-secondary'>Why Choose</h2>
                <h1 className='text-5xl font-blackops tracking-wide py-8'>{homeService2.servicesTitle}</h1>
                <p className='text-lg text-textColor'>{homeService2.servicesDescription}</p>
                <div className='mt-8'>
                    <Button variant="primary">Contact Us</Button>
                </div>
            </div>
            <div className='w-1/2'>
            <div className='w-dashedRound h-dashedRound border-2 border-dashed rounded-full absolute -top-28 -right-40 -z-50'>
            <div className='w-dasedShortRound h-dasedShortRound border-2 border-dashed rounded-full absolute top-20 right-20 animate-animationRotate'></div>
            <div className='w-colourCircle h-colourCircle bg-red-100 rounded-full absolute top-1/3  left-44'>     
            </div>
            
            </div>
            
            <div className='ms-32 -mt-20'>
            <div className="grid grid-cols-2 grid-rows-2">
               <div>
               <div className='bg-white shadow-xl w-[250px] h-[300px] px-10 text-center -mt-2 flex flex-col justify-center items-center hover:-translate-y-4 transition-all ease-in-out duration-300'>
                    <div className='w-20 h-20 bg-red-200 rounded-full mx-auto my-4 flex justify-center items-center'>
                        <img src={icons1} alt="" />
                    </div>
                    <h1 className='text-3xl font-semibold'>Expert Investigator Agents</h1>
                </div>
                <div className='bg-white shadow-xl w-[250px] h-[300px] px-10 text-center mt-6 flex flex-col justify-center items-center hover:-translate-y-4 transition-all ease-in-out duration-300'>
                    <div className='w-20 h-20 bg-red-200 rounded-full mx-auto my-4 flex justify-center items-center'>
                    <img src={icons2} alt="" />
                    </div>
                    <h1 className='text-3xl font-semibold'>Expert Investigator Agents</h1>
                </div>
               </div>
                <div className='bg-white shadow-xl w-[250px] h-[300px] px-10 text-center ms-12 mt-36  flex flex-col justify-center items-center hover:-translate-y-4 transition-all ease-in-out duration-300'>
                    <div className='w-20 h-20 bg-red-200 rounded-full mx-auto my-10 flex justify-center items-center'>
                    <img src={icons3} alt="" />
                    </div>
                    <h1 className='text-3xl font-semibold'>Expert Investigator Agents</h1>
                </div>
            </div>
              
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeServices2 
