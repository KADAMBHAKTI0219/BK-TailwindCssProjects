import React from 'react'
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
const Home = () => {
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
    
      <div>
             <div className="flex flex-wrap justify-between p-0 mx-5 sm:mx-20 md:mx-5 lg:p-10 lg:mx-10">
        {cardData.map((card, index) => (
          <div
            className="card sm:w-[320px] md:w-[420px] lg:w-[420px] xl:w-[420px] mx-auto my-8 shadow-2xl rounded relative border-4"
            key={index}
          >
            <div>
              <div className="card-image h-60 relative w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full rounded-t object-cover"
                />
                <div className="absolute top-5 right-5 px-3 py-2 bg-indigo-700 text-white text-sm">
                  {card.tag}
                </div>
              </div>
              <div className="card-content pt-10 px-10 pb-20">
                <strong className="text-xl">{card.title}</strong>
                <p className="text-sm text-gray-500 py-2">{card.description}</p>
              </div>
            </div>
            <div className="card-footer flex justify-between w-full bg-gray-100 text-gray-900 absolute bottom-0 rounded-b py-4 px-4">
              <div className="flex items-center">
                <span><BsFillStopwatchFill /></span>
                <div className="px-2">{card.time}</div>
              </div>
              <div className="flex items-center">
                <FaComment />
                <div className="px-2">Comments</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

  )
}

export default Home
