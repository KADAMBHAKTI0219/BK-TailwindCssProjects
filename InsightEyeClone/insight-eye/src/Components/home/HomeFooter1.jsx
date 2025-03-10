import React from 'react'
import men1 from '../../Images/Home/men1.png'
import Button from '../../cva/Button'

const HomeFooter1 = () => {
  return (
    <div className='w-full h-96 bg-customGradient relative flex' >
        <div>
         <img src={men1} alt=""  className='absolute bottom-0 left-1/4'/>
        </div>
        <div className='absolute right-44 top-1/3  w-1/3 space-y-4'>
            <h1 className='text-5xl font-blackops  text-white'>Get Professional security service.  </h1>
            <Button variant="buttonBlack">Contact With Us</Button>
        </div>
    </div>
  )
}

export default HomeFooter1
