import React from 'react'

const Progress = () => {
    const timelineData = [
        {
          year: "1999",
          title: "How we Grow Up",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
          year: "2010",
          title: "New Branch Open",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
          year: "2015",
          title: "Extended Law Team",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
          year: "2024",
          title: "Best Law Team",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
      ]
  return (
    <div className='flex flex-col sm:flex-col md:flex-row  w-8xl p-4'>
      {
        timelineData.map((e,index)=>(
            <div className='flex flex-wrap'>
                <div className='w-full h-36 md:h-60  lg:h-40'>
                {
                    index % 2==0 ?
                    <div className='relative'>
                        <span className='font-extrabold text-3xl text-red-200'>{e.year}</span>
                        <div className='border-r-4 h-20 md:h-30 lg:h-25 absolute  right-1/2 top-16 md:top-30 lg:right-1/2 xl:top-15 2xl:top-15 border-amber-900 lg:top-12'>
                        <div className='w-5 h-5 bg-amber-900 rounded-full absolute  left-[-8px]'></div>
                        </div>
                    </div> :
                    <div className='border-t-4 sm:border-t-4 md:border-t-0 lg:border-0 xl:border-0 2xl:border-0 relative sm:py-2.5 border-amber-900 top-38 sm:top-0'>
                    <h2 className='font-bold text-xl'>{e.title}</h2>
                    <p className='line-clamp-3'>{e.description}</p>
                    </div>
                }
                </div>
                <div className='w-full h-40  sm:h-60 md:h-70 lg:36 md:border-t-4 lg:border-t-4 border-amber-900'>
                    {
                    index % 2==1 ?
                   <div className='relative'> 
                    
                    <span className='font-extrabold text-3xl text-red-200  absolute left-2/5 bottom-20 sm:bottom-55 sm:left-2/5  md:top-40  lg:top-28 '>{e.year}</span>
                    <div className='border-r-4 h-20 md:h-30 lg:h-25 absolute right-1/2 -bottom-2 sm:bottom-35  md:top-0  lg:right-1/2 lg:top-1 xl:top-0 xxl-top-0 border-amber-900'> 
                      <div className='w-5 h-5 bg-amber-900 rounded-full absolute  left-[-8px] md:bottom-0 lg:bottom-0'></div>
                      
                    </div>
                   
                   
                   </div>:
                    <div className='border-t-4 sm:border-t-4 md:border-0 lg:border-0 xl:border-0 2xl:border-0 py-2.5 border-amber-900'>
                      <h2 className='font-bold text-xl 200'>{e.title}</h2>
                      <p>{e.description}</p>

                    </div>

                    
                    
                    }
                </div>
            </div>   
           
        ))
      }
    </div>
  )
}

export default Progress
