import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Base_Url } from './Data/constant'

const CardData = () => {
    const [cardData,setCardData] = useState([])
    const [page,setPage] = useState(0)
    const [limit,setLimit] = useState(10)
    const [loading,setLoading] = useState(0)

    const getCardData = ()=>{
        setLoading(true)
        axios.get(`${Base_Url}/cardData?&_limit=${limit}&_page=${page}`)
        .then(res=>setCardData(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
       
        getCardData()
        setLoading(false)
        
    },[page,limit])

    useEffect(()=>{
    
   
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                setLimit(limit+10)
                setPage(page+1)  
            }
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
    },[])
  return (
    <div>
      <h1 className='text-4xl'>Card Data</h1>
        <div className='flex flex-wrap gap-6'>

        {
        cardData.map((item,index)=>(
            <div key={index} className='py-10 my-20 shadow-lg w-96 mx-auto'>
                <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                <img src={item.image} alt="" className='h-28 w-28 mx-auto'/>
            </div>
        ))
      }
       
        </div>
        {loading && <h1>Loading...</h1>}
        {/* <button onClick={(e)=>handleAdd(e)} className='text-xl bg-slate-400 py-4 px-8 rounded-xl text-white'>Next</button> */}
    </div>
  )
}

export default CardData
