import React from 'react'
import "../assets/css/custom-link.css"
import { Link } from 'react-router-dom'
const CustomLink = ({text,Icon,url}) => {
  return (
    
    <Link to={url ? url : "/"} className='costum-link'>
        {
            text ? text : "Link"
        }
        {
            Icon ? <Icon /> : null
        }
    </Link>
  )
}

export default CustomLink