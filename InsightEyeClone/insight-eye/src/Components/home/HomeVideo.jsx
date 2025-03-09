import React from 'react'
import videoBg from '../../Images/Home/videoBg.jpg'
import { RiPlayLargeLine } from "react-icons/ri";
import Button from '../../cva/Button';
import { MdPerson3 } from 'react-icons/md';
import { PiFileMagnifyingGlassDuotone } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";

const HomeVideo = () => {
  const homeVideoData = [
    {
      id: 1,
      time:"40+",
      image:<MdPerson3 />,
      description:"Team members"
    },
    {
      id: 2,
      time:"98%",
      image:<PiFileMagnifyingGlassDuotone />,
      description:"Project Success"
    },{
      id: 3,
      time:"40k+",
      image:<HiUsers />,
      description:"Happy Clients"
    }
  ]
  return (
    <div className='h-screen'>
      <div className='h-full w-full relative'>
        <img src={videoBg} alt="" className='w-full h-full'/>
        <div className='w-full h-full   bg-opacity-65 absolute top-0 bg-gradient-to-r from-black via-transparent to-black'></div>
        <div className='absolute top-1/4 left-1/2'>
          <Button variant="roundedButton" size="roundSm"><span className='text-5xl'><RiPlayLargeLine /></span></Button>
        </div>
        <h1 className='font-blackops text-7xl text-white absolute top-1/2 left-96 w-1/2 text-center'>Watch Our Private Investigation</h1>
        <div className='absolute -bottom-64 left-0 w-full h-1/2 z-50'>
            <div className='max-w-7xl  m-auto  bg-white shadow-lg'>
                <div className='flex justify-around w-full h-full'>
                    {homeVideoData.map((data,index) => (
                        <div className='flex items-center  w-1/3 drop-shadow-2xl shadow-lg px-4 py-16' key={index}>
                            <span className='text-4xl text-secondary mx-10  p-4 bg-white hover:text-white hover:bg-customGradient rounded-full border-2'>{data.image}</span>
                            <div>
                                <h1 className='font-bold text-4xl'>{data.time}</h1>
                                <p className='text-xl'>{data.description}</p>
                            </div>
                        </div>
                  ))}
                </div>
            </div>
        </div>
      </div>
   
    </div>
  )
}

export default HomeVideo
