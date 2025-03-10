import React from 'react'
import { newsDetails } from '../../data/home'
import {FaArrowRightLong } from 'react-icons/fa6'
import contactIcon from '../../Images/Home/contactIcon.svg'
import commentIcon from '../../Images/Home/commentIcon.svg'
import Button from '../../cva/Button'


const HomeArticle = () => {
  return (
    <div className='w-full h-full py-32 bg-gray-50'>
       <div className='text-center space-y-4 pb-20 w-1/2 mx-auto'>
       <h1 className='text-lg text-secondary font-semibold'>Our Article</h1>
       <p className='text-6xl font-blackops'>Get More Update From Our Article</p>
       </div>

      <div className='flex justify-center items-center '>
        {
            newsDetails.map((item, index) => (
                <div className='w-cardWidth p-8 space-y-4 bg-white mx-4 shadow-lg' key={index}>
                    <div className='relative'>
                         <img src={item.newsImage} alt="" className='w-full h-full hover:scale-105'/>
                         <Button variant="roundedButton" size="roundMd" className="text-xl absolute right-8 -bottom-10 p-4">{item.newsDate}</Button>

                    </div>
                   <div className='pt-2'>
                   <div className='flex items-center w-52 justify-between text-textColor py-4'>
                        <div className='flex space-x-4 text-lg'>
                            <img src={contactIcon} alt="" />
                            <p>Admin</p>
                        </div>
                        <div className='flex space-x-4 text-lg'>
                            <img src={commentIcon} alt="" />
                            <p>{item.newsCmnts}</p>
                        </div>
                    </div>
                    <h2 className='text-2xl font-bold hover:text-secondary'>{item.newsTitle}</h2>
                    <p className='text-md text-textColor py-6'>{item.newsDetails}</p>
                    <div className=" text-black group flex item-center ">
                    <span className="hidden transition-all ease-in-out duration-300  group-hover:inline mt-2 group-hover:text-secondary mr-2"><FaArrowRightLong/></span>
                    <span className='text-lg font-semibold group-hover:text-secondary p-0'>Read More</span>
                      
                        
                    </div>
                   </div>
                    </div>

            ))
        }
      </div>
    </div>
  )
}

export default HomeArticle
