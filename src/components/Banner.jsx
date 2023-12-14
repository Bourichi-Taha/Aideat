import React from 'react'
import "../assets/css/banner.css"
import img from "../assets/images/banner.png"
// import img2 from "../assets/images/bg-image2.png"
import Button from './Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CustomLink from './CustomLink'
import SectionHeader from './SectionHeader';
import SectionTitle from './SectionTitle';
const Banner = () => {
    return (
        <div className="banner-container">
            {/* <img src={img2} alt="" style={{position:"absolute",zIndex:-1,height:"100vh",width:"100vw",left:0,top:0}} /> */}
            <div className="banner-container-left">
                <SectionHeader text={"Bid management software"} />
                {/* <h1 className="banner-title">
                    <strong>
                        Optimise your <span>bids</span>.<br />
                        <span>Win</span> more proposals.<br />
                        Stop <span>wasting</span> time.
                    </strong>
                </h1> */}
                <SectionTitle text={"<strong>Optimise your <span>bids</span>.<br /><span>Win</span> more proposals.<br />Stop <span>wasting</span> time.</strong>"} />
                <p className="banner-desc">
                    Imagine never writing a bad proposal, ever again, and winning all your RFPs and tenders. Aideat’s unrivalled AI-driven bid management tool turns your bid team into winners.
                </p>
                <div className="banner-actions">
                    <Button text={"Schedule a Call"} Icon={EventAvailableIcon} />
                    <CustomLink text={"Find out how it works"} url={"/"} Icon={ArrowForwardIosIcon} />
                </div>
            </div>
            <div className="banner-container-right">
                <img src={img} alt="" className="banner-container-right-img" />
            </div>
        </div>
    )
}

export default Banner