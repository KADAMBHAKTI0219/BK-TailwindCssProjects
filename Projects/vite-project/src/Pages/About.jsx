import React, { useState } from 'react'

const About = () => {
    const [modal,setModal] = useState(false)
  return (
    <div className=' flex justify-center items-center h-screen'>
      <button onClick={()=>setModal(!modal)} className='w-100 h-100 bg-black text-white p-4 rounded-lg dark:bg-white dark:text-black'>Modal</button>
    {modal ? <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md w-96 p-6 transition-all duration-700 hover:scale-105 transform translate-y-0">
        <h2 className="text-lg font-bold mb-4 text-black">About</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>setModal(!modal)}>Close</button>
        </div>
    </div> : null}
    </div>
  )
}

export default About
