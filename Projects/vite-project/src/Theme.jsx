import React from 'react'
import { useEffect, useState } from "react";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
const Theme = () => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark" || 
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);
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
    <button 
      onClick={() => setDarkMode(!darkMode)} 
      className="p-2 bg-gray-400 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
   </div>
  )
}

export default Theme
