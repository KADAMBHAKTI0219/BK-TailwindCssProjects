import React from 'react'
import Carousel from '../Components/home/carousel'
import HomeAbout from '../Components/home/homeAbout'
import HomeService from '../Components/home/HomeService'
import LogoSlider from '../Components/home/LogoSlider'
import HomeServices2 from '../Components/home/HomeServices2 '
import HomeVideo from '../Components/home/HomeVideo'
import HomeTestimonials from '../Components/home/HomeTestimonials'
import HomeInvestigator from '../Components/home/HomeInvestigator'
import HomeFAQ from '../Components/home/HomeFAQ'
import HomeArticle from '../Components/home/HomeArticle'
import HomeFooter1 from '../Components/home/HomeFooter1'
import HomeFooter from '../Components/home/HomeFooter'

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
      <HomeFAQ/>
      <HomeArticle/>
      <HomeFooter1/>
      <HomeFooter/>
    </div>
  )
}

export default HomePage
