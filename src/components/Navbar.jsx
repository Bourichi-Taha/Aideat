import React, { useEffect, useState } from 'react'
import "../assets/css/navbar.css"
import { Link } from 'react-router-dom'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'
import logo from "../assets/images/logo.png"
import CustomLink from './CustomLink'
const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsNavbarVisible(!isScrollingDown || currentScrollPos === 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="navbar-container" style={{background:isNavbarVisible ? "rgba(51, 99, 196, 0.6)" : "rgb(51, 99, 196)" }}>
      <div className="navbar-container-content">
        <img src={logo} alt="" className="navbar-container-content-img" />
        <div className="navbar-container-content-right">
          <CustomLink text={"Home"} url={"/"} />
          <CustomLink text={"About"} url={"/about"} />
          <CustomLink text={"Services"} url={"/services"} />
          <CustomLink text={"Branches"} url={"/branches"} />
          <CustomLink text={"Contact"} url={"/contact"} />
        </div>
        <div className="navbar-container-content-right">
          {/* <Link to={"/"} className='navbar-login-link'>Login</Link> */}
          <Button text={"Login"} />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Navbar