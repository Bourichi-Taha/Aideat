import React from 'react'
import "../assets/css/input-field.css"
const InputField = ({label,value,setValue,full,placeHolder,required=true}) => {
    let style;
    if (full) {
        style = {
            flex:"1 1 auto",
            maxWidth:"100%",
            width:"100%"
        }
    }else{
        style = {
            flex:".5 1 auto",
            maxWidth:"calc(50% - 1rem)",
            width:"calc(50% - 1rem)"
        }
    }
  return (
    <div className="input-field-container" style={style}>
        <label className='input-field-container-label' htmlFor='input-field'>{(label ? label : "Label here") + (required ? " *" : "")}</label>
        <input required={required} placeholder={placeHolder ? placeHolder : ""} value={value} onChange={(e)=>setValue(e.target.value)} type="text" id='input-field' className='input-field-container-input' />
    </div>
  )
}

export default InputField