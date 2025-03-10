import React from 'react'
import footerBg from '../../Images/Home/footerBg.jpg'
import { copyRight } from '../../data/constant'
import {footer} from '../../data/common'

const HomeFooter = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full relative'>
            <img src={footerBg} alt="" className='w-full '/>
            <div className=' bg-gradient-to-l from-black via-transparent to-black  absolute top-0 w-full h-full'></div>
            <div className='flex justify-between  absolute top-0 text-white p-12 px-20'>
                <div className='space-y-6 w-1/4'>
                    <img src={footer.companyLogo} alt="" className='h-14 p-2'/>
                    <p clas>{footer.description}</p>
                    <p>{footer.footerDetails}</p>
                </div>
                <div>
                    <h1 className='pb-6 text-2xl font-bold'>{footer.QuickLineTitle}</h1>
                    <ul className='space-y-4'>
                    {
                        footer.QuickLineDetails.map((el,index)=>(
                            <li className='text-lg'>{el.title}</li>
                        ))
                    }
                    </ul>
                </div>
                <div>
                <h1  className='pb-6 text-2xl font-bold'>{footer.UsefullLinks}</h1>
                    <ul className='space-y-4'>
                    {
                        footer.UsefullLinksDetails.map((el,index)=>(
                            <li className='text-lg'>{el.title}</li>
                        ))
                    }
                    </ul>
                </div>
                <div>
                    <h1 className='pb-6 text-2xl font-bold'>{footer.ConatactUs}</h1>
                    <p className='pb-6'>{footer.ConatactUsDetails}</p>
                    <ul>
                        {
                            footer.ContactIcons.map((el,index)=>(
                                <div className='flex items-center space-y-6 space-x-4'>
                                    <img src={el.icon} alt="" className='pt-6' />
                                    <li>{el.title}</li>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
      </div>
      <div className='h-full w-full p-8 bg-gradient-to-r from-black to-black'>
            <h1 className='text-xl text-center text-white'>{copyRight}</h1>
      </div>
    </div>
  )
}

export default HomeFooter
