import React from 'react'
import "../assets/css/why.css"
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import Button from './Button'
import library from "../assets/images/library-1.png"
import search from "../assets/images/search.png"
import project from "../assets/images/management.png"
const Why = () => {
    return (
        <div className="why-container">
            <SectionHeader text={"Why the Aideat?"} />
            <div className="why-container-row-title">
                <SectionTitle text='Put <span>Aideat</span> to work<br />and save time' />
                <div className="why-container-row-title-actions">
                    <Button text={"Try For Free*"} />
                    <h6>* Completely without obligation, you are not tied to anything.</h6>
                </div>
            </div>
            <div className="why-container-features">
                <div className="why-container-feature">
                    <img src={library} alt="" className="why-feature-top" />
                    <div className="why-feature-bottom">
                        <h3 className="why-feature-bottom-title">
                            Document Library
                        </h3>
                        <p className="why-feature-bottom-desc">
                            Your repository for accurate, up-to-date bid content. The intuitive filing structure enables information to be easily organised, updated and retrieved.
                        </p>
                    </div>
                </div>
                <div className="why-container-feature">
                    <img src={project} alt="" className="why-feature-top" />
                    <div className="why-feature-bottom">
                        <h3 className="why-feature-bottom-title">
                            Project Management
                        </h3>
                        <p className="why-feature-bottom-desc">

                            Benefit from our proven bid process methodology with best practice scheduling tools, workflows, reporting and alerts for your entire bid team.
                        </p>
                    </div>
                </div>
                <div className="why-container-feature">
                    <img src={search} alt="" className="why-feature-top" />
                    <div className="why-feature-bottom">
                        <h3 className="why-feature-bottom-title">
                            AI Search & Filters
                        </h3>
                        <p className="why-feature-bottom-desc">
                            Automatically match questions with your best previous answers. Aideat will identify and autofill a high percentage of questions at the click of a button.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why