import React from 'react'
import { homeServices } from '../../data/common'
import Button from '../../cva/Button'
import { homeServicesCard } from '../../data/home'

const HomeService = () => {
  return (
    <div className='bg-bgSecondary w-full h-full text-center py-20'>
        <h3 className='text-secondary text-xl font-semibold'>Our Services</h3>
        <h1 className='font-blackops text-5xl pt-4 tracking-wide w-1/2 m-auto'>{homeServices.servicesTitle}</h1>
        <div className='flex justify-between max-w-7xl mx-auto my-10'>
        {
            homeServicesCard.map((data,index)=>(
               
                <div className='w-cardWidth relative bg-white' key={index}>
                    <div className=" text-center relative  overflow-hidden">
                        <img src={data.image} alt={data.title} className='w-full h-full hover:scale-105 transition-all duration-500 ease-in-out'/>
                        <div className="absolute bottom-5 left-1/3 px-8 py-2 bg-white text-secondary font-semibold text-md rounded-2xl">
                            {data.tag}
                        </div>
                    </div>
                    <div className="pb-20 pt-14 px-12">
                        <h1 className='font-bold text-2xl pb-4'>{data.title}</h1>
                        <p className='text-textColor text-lg'>{data.description}</p>
                    </div>
                    <div className='absolute -bottom-6 left-1/4'>
                    <Button variant="secondary">Read More</Button>
                </div>
                </div>   
            ))
        }
         </div>
    </div>
  )
}

export default HomeService
