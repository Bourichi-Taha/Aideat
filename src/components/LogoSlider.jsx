import React from 'react'
import "../assets/css/logo-slider.css"
import audi from "../assets/images/logo/canon.png"
import dhl from "../assets/images/logo/DHL-Logo.png"
import ing from "../assets/images/logo/Allianz.png"
import ms from "../assets/images/logo/MS-Amlin-Logo.png"
import ups from "../assets/images/logo/capGem.png"
import kpn from "../assets/images/logo/KPN.png"
import nielsen from "../assets/images/logo/Nielsen.png"
import p1 from "../assets/images/logo/partners1.png"
import p2 from "../assets/images/logo/partners2.png"
import p3 from "../assets/images/logo/partners4.png"
import p4 from "../assets/images/logo/partners5.png"
import p5 from "../assets/images/logo/partners6.png"
const LogoSlider = ({ partners }) => {
    let content;
    if (partners) {
        content = (
            <div className="logos">
                <div className="logos-slide">
                    <img src={p1} alt='Aideat' />
                    <img src={p2} alt='Aideat' />
                    <img src={p3} alt='Aideat' />
                    <img src={p4} alt='Aideat' />
                    <img src={p5} alt='Aideat' />
                </div>

                <div className="logos-slide">
                    <img src={p1} alt='Aideat' />
                    <img src={p2} alt='Aideat' />
                    <img src={p3} alt='Aideat' />
                    <img src={p4} alt='Aideat' />
                    <img src={p5} alt='Aideat' />
                </div>
            </div>
        )
    } else {
        content = (
            <div className="logos">
                <div className="logos-slide">
                    <img src={audi} alt='Aideat' />
                    <img src={dhl} alt='Aideat' />
                    <img src={ing} alt='Aideat' />
                    <img src={ms} alt='Aideat' />
                    <img src={ups} alt='Aideat' />
                    <img src={kpn} alt='Aideat' />
                    <img src={nielsen} alt='Aideat' />
                </div>

                <div className="logos-slide">
                    <img src={audi} alt='Aideat' />
                    <img src={dhl} alt='Aideat' />
                    <img src={ing} alt='Aideat' />
                    <img src={ms} alt='Aideat' />
                    <img src={ups} alt='Aideat' />
                    <img src={kpn} alt='Aideat' />
                    <img src={nielsen} alt='Aideat' />
                </div>
            </div>
        )
    }
    return content
}

export default LogoSlider