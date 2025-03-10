import React from 'react'
import { investigators } from '../../data/home'
import Button from '../../cva/Button'
import { FaShareAlt } from "react-icons/fa";
import {Investigator} from '../../data/common'

const HomeInvestigator = () => {
  return (
    <div className='w-full h-screen text-center'>
      <h1 className='text-xl font-semibold text-secondary pb-4'>{Investigator.investigatorsTitle}</h1>
      <h1 className='font-blackops text-5xl'>{Investigator.investigatorsDescription}</h1>
      <div className='flex justify-between max-w-7xl mx-auto my-10'>
              {
                  investigators.map((data,index)=>(
                     
                      <div className='w-cardWidth relative bg-white' key={index}>
                            <img src={data.image} alt="" />
                            <div className='absolute -bottom-20 bg-white w-2/3 mx-auto left-16 h-1/3 shadow-lg px-4 flex items-center justify-center'>
                                <Button variant="roundedButton" size='roundSm' className={'absolute -top-5 left-28'}> <span><FaShareAlt /></span></Button>
                                <div className=''>
                                <h1 className='text-3xl font-bold text-black py-2'>{data.name}</h1>
                                <p className='text-lg text-secondary'>{data.designation}</p>
                            </div>
                            </div>
                           
                      </div>   
                  ))
              }
               </div>
    </div>
  )
}

export default HomeInvestigator
