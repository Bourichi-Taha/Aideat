import React from 'react'
import "../assets/css/button.css"
const Button = ({text,onClick,Icon}) => {
  return (
    <div className="button-container">
        {Icon ? <Icon /> : null}
        {text || "Button"}
    </div>
  )
}

export default Button