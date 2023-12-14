import React from 'react'
import "../assets/css/services.css"
import SectionTitle from '../components/SectionTitle'
import img1 from "../assets/images/project-man-ser.png"
import img2 from "../assets/images/ai-oriented.png"
import img3 from "../assets/images/library service.png"
import img4 from "../assets/images/tasks service.png"
import img5 from "../assets/images/security service.png"
import SectionHeader from '../components/SectionHeader'
const Services = () => {
    return (
        <div className="services-container">
            <div className="services-container-content">
                <SectionHeader text={"Services"} center={true} />
                <SectionTitle center={true} text='What We <span>Provide</span>' />
                <div className="services-wrap-container">
                    <div className="service-item-card">
                        <img src={img1} alt="" className="service-item-card-img" />
                        <h3 className="service-item-card-title">
                            Project Management
                        </h3>
                    </div>
                    <div className="service-item-card">
                        <img src={img2} alt="" className="service-item-card-img" />
                        <h3 className="service-item-card-title">
                            AI Oriented
                        </h3>
                    </div>
                    <div className="service-item-card">
                        <img src={img3} alt="" className="service-item-card-img" />
                        <h3 className="service-item-card-title">
                            Documents Library
                        </h3>
                    </div>
                    <div className="service-item-card">
                        <img src={img4} alt="" className="service-item-card-img" />
                        <h3 className="service-item-card-title">
                            Task Managements
                        </h3>
                    </div>
                    <div className="service-item-card">
                        <img src={img5} alt="" className="service-item-card-img" />
                        <h3 className="service-item-card-title">
                            Security & Support
                        </h3>
                    </div>
                    <div className="service-item-card">
                        <img src={img2} alt="" className="service-item-card-img" />
                        <h3 className="service-item-card-title">
                            Seamless Integration
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services