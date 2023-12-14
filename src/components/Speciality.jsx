import React from 'react'
import "../assets/css/speciality.css"
// import img from "../assets/images/constracting.png"
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SectionTitle from './SectionTitle'
import Button from './Button'
const Speciality = ({title="Spend less time in Excel and more time winning tenders",desc="Collaborate better, more easily, and do it all in a uniform way.",button=true}) => {
  return (
    <div className="speciality-container">
        <SectionTitle center white text={title} />
        <h6 className="speciality-desc">
        {desc}
        </h6>
        {
          button ? <Button text={"Schedule a Call"} Icon={EventAvailableIcon} /> : null
        }
    </div>
  )
}

export default Speciality