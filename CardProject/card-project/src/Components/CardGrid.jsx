import React from 'react'
import { BsFillStopwatchFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';

const CardGrid = () => {
  
  const cardData = [
    {
      title: "Simplest Salad Recipe Ever",
      image:
        "https://avatars.mds.yandex.net/i?id=6a73728300ea2e3538f99173845e508fae774e95-9234735-images-thumbs&n=13",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
      tag: "Cooking",
      time:'6 mins ago'
    },
    {
      title: "Best FastFood Ideas (Yummy)",
      image:
        "https://avatars.mds.yandex.net/i?id=185b8bc17673a216bbce7fccabca748acc1f3b67-5254476-images-thumbs&n=13",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
      tag: "Cooking",
      time:'10 mins ago'
    },
    {
      title: "Why To Eat Salad?",
      image:
        "https://avatars.mds.yandex.net/i?id=f19f53bb3bac21e1b13c0637b093236a7189ee64-5271071-images-thumbs&n=13",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
      tag: "Cooking",
      time:'35 mins ago'
    },
    {
        title: "Simplest Salad Recipe Ever",
        image:
          "https://avatars.mds.yandex.net/i?id=6a73728300ea2e3538f99173845e508fae774e95-9234735-images-thumbs&n=13",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
        tag: "Cooking",
        time:'6 mins ago'
      },
      {
        title: "Best FastFood Ideas (Yummy)",
        image:
          "https://avatars.mds.yandex.net/i?id=185b8bc17673a216bbce7fccabca748acc1f3b67-5254476-images-thumbs&n=13",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
        tag: "Cooking",
        time:'10 mins ago'
      },
      {
        title: "Why To Eat Salad?",
        image:
          "https://avatars.mds.yandex.net/i?id=f19f53bb3bac21e1b13c0637b093236a7189ee64-5271071-images-thumbs&n=13",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
        tag: "Cooking",
        time:'35 mins ago'
      }, {
        title: "Simplest Salad Recipe Ever",
        image:
          "https://avatars.mds.yandex.net/i?id=6a73728300ea2e3538f99173845e508fae774e95-9234735-images-thumbs&n=13",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
        tag: "Cooking",
        time:'6 mins ago'
      },
      {
        title: "Best FastFood Ideas (Yummy)",
        image:
          "https://avatars.mds.yandex.net/i?id=185b8bc17673a216bbce7fccabca748acc1f3b67-5254476-images-thumbs&n=13",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
        tag: "Cooking",
        time:'10 mins ago'
      },
      {
        title: "Why To Eat Salad?",
        image:
          "https://avatars.mds.yandex.net/i?id=f19f53bb3bac21e1b13c0637b093236a7189ee64-5271071-images-thumbs&n=13",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus eos vitae at. Debitis, asperiores?",
        tag: "Cooking",
        time:'35 mins ago'
      }
  ];
  return (
    <div className='grid sm:grid-rows-1 sm:grid-cols-1 md:grid-rows-5 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 xl:grid-rows-3 xl:grid-cols-4 2xl:grid-rows-3 2xl:grid-cols-3 gap-5 m-20'>
      {
        cardData.map((card,index)=>(
           <div className="card col-span-1 border-2 shadow-2xl rounded relative"
                   key={index}> 
                      <div>
                   <div className="card-image h-50 sm:h-60 md:h-70 lg:h-60 relative w-vw">
                     <img src={card.image} alt="" className="h-full w-full rounded-t object-fill object-center" />
                     <div className="absolute top-5 right-5 px-3 py-2 lg:px-5 lg:py-2 bg-indigo-700 text-white text-sm">
                       {card.tag}
                     </div>
                   </div>
                   <div className="card-content pt-10 px-10 pb-22">
                     <strong className="text-xl">{card.title}</strong>
                     <p className="text-sm text-gray-500 py-2">{card.description}</p>
                   </div>
                   
                      </div>
                      <div className="card-footer flex justify-between w-full bg-gray-100  absolute bottom-0 rounded-b py-4 px-4">
                       <div className="flex items-center justify-between">
                           <BsFillStopwatchFill />
                           <div className="px-2">{card.time}</div>
                       </div>
                       <div className="flex items-center">
                           <div><FaComment /></div>
                           <div className="px-2">Comments</div>
                       </div>
                   </div>
                  </div>
        ))
      }
    </div>
  )
}

export default CardGrid
