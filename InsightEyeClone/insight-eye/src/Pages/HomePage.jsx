import React from 'react'
import Carousel from '../Components/home/carousel'
import HomeAbout from '../Components/home/homeAbout'
import HomeService from '../Components/home/HomeService'
import LogoSlider from '../Components/home/LogoSlider'
import HomeServices2 from '../Components/home/HomeServices2 '
import HomeVideo from '../Components/home/HomeVideo'
import HomeTestimonials from '../Components/home/HomeTestimonials'
import HomeInvestigator from '../Components/home/HomeInvestigator'

const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <HomeAbout/>
      <HomeService/>
      <LogoSlider/>
      <HomeServices2/>
      <HomeVideo/>
      <HomeTestimonials/>
      <HomeInvestigator/>
    </div>
  )
}

export default HomePage
