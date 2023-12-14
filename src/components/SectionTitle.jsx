import React, { useEffect, useRef } from 'react'
import "../assets/css/section.css"
const SectionTitle = ({text="Section Title",white,center}) => {
    const ref = useRef(null)
    useEffect(()=>{
        if (ref?.current) {
            // Use dangerouslySetInnerHTML to render HTML content
            ref.current.innerHTML = text;
          }
    },[text]);
    return (
        <h1 className="section-title" ref={ref} style={{color:white && "white",textAlign:center && "center",width:center && "100%"}}>

        </h1>
    )
}

export default SectionTitle