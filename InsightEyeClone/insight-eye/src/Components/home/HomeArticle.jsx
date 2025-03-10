import React from 'react'
import { newsDetails } from '../../data/home'
import {FaArrowRightLong } from 'react-icons/fa6'
import contactIcon from '../../Images/Home/contactIcon.svg'
import commentIcon from '../../Images/Home/commentIcon.svg'
import Button from '../../cva/Button'


const HomeArticle = () => {
  return (
    <div className='w-full h-full bg-gray-100 py-32'>
       <div className='text-center space-y-4 pb-20 w-1/2 mx-auto'>
       <h1 className='text-lg text-secondary font-semibold'>Our Article</h1>
       <p className='text-6xl font-blackops'>Get More Update From Our Article</p>
       </div>

      <div className='flex justify-center items-center'>
        {
            newsDetails.map((item, index) => (
                <div className='w-cardWidth p-6 space-y-4 bg-white mx-4' key={index}>
                    <div className='relative'>
                         <img src={item.newsImage} alt="" className='w-full h-full hover:scale-105'/>
                         <Button variant="roundedButton" size="roundMd" className="text-xl absolute right-1/4 -bottom-10 p-4">{item.newsDate}</Button>

                    </div>
                    <div className='flex items-center w-1/2 justify-between text-textColor'>
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
                    <p className='text-lg'>{item.newsDetails}</p>
                    <div className=" text-black group flex item-center">
                        <span className=" opacity-0 transition-opacity group-hover:opacity-100 mt-2 group-hover:text-secondary"><FaArrowRightLong/></span>
                        <span className='text-xl font-semibold group-hover:text-secondary mx-0'>Read More</span>
                    </div>
                    </div>

            ))
        }
      </div>
    </div>
  )
}

export default HomeArticle
