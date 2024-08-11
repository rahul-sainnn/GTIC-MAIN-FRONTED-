import React from 'react'
import Objectives from './Objectives/Objectives'
import WhyAttend from './WhyAttend/WhyAttend'
import PieCharts from './PieChart/PieChart'
import { pieData } from './PieChart/pieData'
import Traders from './Traders/Traders'
import WhoAttend from './WhoAttend/WhoAttend'
import AboutSpeakers from './AboutSpeakers/AboutSpeakers'
import ScrollToTop from '../../utilities/ScrollToTop/ScrollToTop'

const About = () => {
  return (
    <div>
      <div className="about">.</div>
      <ScrollToTop />
      <Objectives />
      <WhyAttend />
      <WhoAttend />
      <AboutSpeakers />
      <Traders />
    </div>
  )
}

export default About