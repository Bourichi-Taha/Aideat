import React from 'react'
import "../assets/css/trusted.css"
import LogoSlider from './LogoSlider'
import SectionTitle from './SectionTitle'
const Trusted = () => {
  return (
    <div className="trusted-container">
        <SectionTitle text='Trusted <span>providers</span> to: ' />
        <LogoSlider />
    </div>
  )
}

export default Trusted