import React from 'react'
import "../assets/css/section.css"
const SectionHeader = ({text,center=false}) => {
  return (
    <div className="section-header" style={{textAlign:center && "center"}}>
        {
            text ? text : "header here"
        }
    </div>
  )
}

export default SectionHeader