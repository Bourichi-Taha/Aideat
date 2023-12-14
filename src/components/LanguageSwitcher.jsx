import React, { useState } from 'react'
import "../assets/css/language-switcher.css"
const LanguageSwitcher = () => {
    const [isEng,setIsEng] = useState(false);
    const clickHandler = (e) => {
        if (e.target.innerText === "NL") {
            setIsEng(false);
        }else{
            setIsEng(true);
        }
    }
  return (
    <div className="languge-switcher-container">
        <a className={isEng ? "language-item passive" : "language-item"} onClick={clickHandler}>NL</a>
        <a className={isEng ? "language-item" : "language-item passive"} onClick={clickHandler}>EN</a>
    </div>
  )
}

export default LanguageSwitcher