import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMail, MdOutlineWatchLater } from "react-icons/md";
import { FaArrowRightLong, FaClock, FaFacebookF, FaInstagram, FaRegCircleUser, FaTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from '../Images/Navbar/logo.png';
import { email, phone, timing } from "../data/constant";
import { navLinks } from "../data/navbar";
import Button from "../cva/Button";
const Navbar = () => {
  const SocialMediaIcons = [
    { id: "facebook", icon: <FaFacebookF />, url: "https://www.facebook.com" },
    { id: "twitter", icon: <FaTwitter />, url: "https://www.twitter.com" },
    { id: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com" }
];

  return (
    <div>
      <div className="flex justify-around items-center bg-black w-full text-white px-12 py-4 font-semibold text-lg">
           <div className="flex items-center h-full border-r-2 pe-5 border-gray-800 cursor-pointer">
                <span className="px-4 text-[22px] text-theme"><MdOutlineMail /></span>
                <span className="hover:text-secondary">{email}</span>
            </div>
            <div className="flex items-center ps-6">
                <span className="px-2 text-lg text-theme"><MdOutlineWatchLater /></span>
                <span>{timing}</span>
            </div>
            <div className="flex items-center flex-grow justify-end pr-8 h-full border-r-2 ps-16 pe-8 border-gray-800  cursor-pointer ">
                    <span className="px-2 text-lg text-theme"><FaRegCircleUser /></span>
                    <span className="hover:text-secondary">Login</span>
            </div>
            <div className="flex items-center text-md ps-5  cursor-pointer space-x-4">
            {SocialMediaIcons.map(({ id, icon, url }) => (
                    <a key={id} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                        {icon}
                    </a>  
                ))}
            </div>
      </div>

      <div className="border-b-2 bg-white w-full h-24 flex items-center justify-between sticky top-0 z-10">
        <div className="w-[400px] bg-red-100 h-full absolute top-0 left-0 flex justify-between"></div>
          <div className="flex items-center h-full bg-white rounded-s-[40px] w-[100px] absolute top-0 left-[364px]  "></div>
            <div className="flex justify-between absolute top-5 px-16 w-full">
              <div className="flex items-center border-r-2 pe-12">
              <img src={logo} alt="" className="h-10 w-52 "/>
              
               <div className="nav-links flex items-center space-x-10 ps-12 text-xl font-semibold font-ubuntu">
               {navLinks.map(({ id, label, url }) => (
                <Link key={id} to={url} className="hover:text-secondary">
                    {label}
                </Link>
                ))}
                <div  className="flex items-center space-x-4 ps-4">
                <span className="text-secondary"><BsFillTelephoneFill /></span>
                <span>{phone}</span>
                </div>
               </div>
              </div>
              <div>
             <Button variant="primary" size="lg"> Lets Contact  <span className="ps-4"><FaArrowRightLong className="inline text-xl " /></span></Button>
                
              </div>
            </div>
      </div>
        </div>
  );
};

export default Navbar;