import React from 'react'
import "../assets/css/about.css"
import img from "../assets/images/bg-image.png"
const About = () => {
    return (
        <div className="about-container">
            <div className="about-container-content">
                <div className="about-container-content-left">
                    <h1 className="about-left-title">
                        Our <span>story</span>
                    </h1>
                    <p className="about-left-desc">
                    EPM and BI are integrating more and more, allowing you to continuously give your users reliable insights. By expanding your current team with our specialized support and <span>hosting services</span> you will immediately get more value from you <span>financial</span> and <span>BI solutions</span>. As an experienced sparring partner we ensure a reliable and stable application and we fitlifecycle management to integrate the latest developments in data architecture. 
                    </p>
                    <p className="about-left-desc">
                    At <span>Aideat</span>, we like to take on complex challenges and give independent and pragmatic advice. Our experts combine substantive IT knowledge with business processes to advise the best planning, consolidation and BI solutions. With our unique and innovative management model, you can scale up and down our management services at any time, appropriate to your business processes and reporting deadlines.
                    </p>
                </div>
                <div className="about-container-content-right">
                    <img src={img} className='about-right-img' alt="" />
                </div>
            </div>
        </div>
    )
}

export default About