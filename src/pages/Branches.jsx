import React from 'react'
import "../assets/css/branches.css"
import img1 from "../assets/images/finance.png"
import img2 from "../assets/images/constr.png"
import img3 from "../assets/images/project-man-ser.png"
import SectionHeader from '../components/SectionHeader'
import SectionTitle from '../components/SectionTitle'
const Branches = () => {
    return (
        <div className="branches-container">
            <div className="branches-container-content">
                <SectionHeader text={"Branches"} center={true} />
                <SectionTitle center={true} text='In <span>which</span> we operate' />
                <div className="branches-wrap-container">
                    <div className="branch-item-card">
                        <img src={img1} alt="" className="branch-item-card-img" />
                        <h3 className="branch-item-card-title">
                            Financial
                        </h3>
                    </div>
                    <div className="branch-item-card">
                        <img src={img2} alt="" className="branch-item-card-img" />
                        <h3 className="branch-item-card-title">
                            Public sector
                        </h3>
                    </div>
                    <div className="branch-item-card">
                        <img src={img3} alt="" className="branch-item-card-img" />
                        <h3 className="branch-item-card-title">
                            Constraction
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Branches