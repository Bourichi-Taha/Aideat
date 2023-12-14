import React from 'react'
import "../assets/css/footer.css"
import logo from "../assets/images/logo.png"
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container-content">
                <div className="footer-container-content-top">
                    <div className="footer-container-content-top-left">
                        <img src={logo} alt="" className="footer-container-content-top-left-img" />
                        <p className="footer-container-content-top-left-rights">© 2023 Aideat. All rights reserved.</p>
                    </div>
                    <div className="footer-container-content-top-right">
                        <p style={{ gap: "1rem" }}>
                            GloboPeople (GB)
                            <br />
                            Teststraat 1
                            <br />
                            1000 AA  AMSTELVEEN,
                            <br />
                            the Netherlands
                        </p>
                    </div>
                </div>
                <div className="footer-container-content-bottom">
                    <div className="footer-container-content-bottom-left">Privacy policy</div>
                    <div className="footer-container-content-bottom-right">Terms & conditions</div>
                </div>

            </div>
        </div>
    )
}

export default Footer