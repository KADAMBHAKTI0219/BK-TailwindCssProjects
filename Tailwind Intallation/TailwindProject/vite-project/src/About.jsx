import React from 'react'
const About = () => {
  return (
    <div className='flex justify-between my-20 w-8xl m-auto text-start'>
            <div className='w-4xl '>
               <h1 className=' font-bold text-3xl'>About Us</h1>
               <p className=' py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum iusto ex possimus cupiditate, alias quidem facere mollitia itaque officiis fuga aspernatur, nesciunt non, tenetur exercitationem! Debitis qui expedita iste.</p>
              <div className='contact'>
                    <form action="" className='flex flex-col'>
                        <input type="text" placeholder='Enter Your Name' className='w-[30vw] p-4 my-4 focus:ring-amber-600 focus:ring-4 rounded-2xl outline-0'/>
                        <input type="password" placeholder='Enter Your Password' className='w-[30vw] p-4 my-4 focus:ring-amber-600 focus:ring-4 rounded-2xl outline-0'/>
                    </form>
              </div>
            </div>
            <div className='w-4xl'>
                <img src="https://avatars.mds.yandex.net/i?id=f8f5485d4e7422ae4e39689089ac1d999061d05a-5232896-images-thumbs&n=13" alt="" className='w-full' />
            </div>
    </div>
  )
}

export default About
