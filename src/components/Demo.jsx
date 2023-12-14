import React, { useState } from 'react'
import "../assets/css/demo.css"
import SectionHeader from './SectionHeader'
import SectionTitle from './SectionTitle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputField from './InputField';
const Demo = () => {
    const [username,setUsername] = useState("")
    return (
        <div className="demo-container">
            <div className="demo-container-left">
                <SectionHeader text={"Demo"} />
                <SectionTitle text='<span>Schedule</span> a call with our team' />
                <h6 className="demo-container-left-desc">
                    During this 15 min. conversation, we’ll show you how you’ll never lose a winnable bid with Altura.
                </h6>
                <div className="demo-container-left-checks">
                    <div className="demo-container-left-check">
                        <CheckCircleIcon />
                        <h6 className="demo-container-left-check-desc">
                            70% time saved
                        </h6>
                    </div>
                    <div className="demo-container-left-check">
                        <CheckCircleIcon />
                        <h6 className="demo-container-left-check-desc">
                            3x faster processing of tenders & RFPs
                        </h6>
                    </div>
                    <div className="demo-container-left-check">
                        <CheckCircleIcon />
                        <h6 className="demo-container-left-check-desc">
                            Predictive capabilities and oversight of upcoming bids
                        </h6>
                    </div>
                </div>
                <div className="separator"></div>
            </div>
            <div className="demo-container-right">
                <form className="demo-right-form">
                    <div className="demo-right-form-row">
                        <InputField placeHolder={"Taha"} label={"username"} full={false} setValue={setUsername} value={username} />
                        <InputField placeHolder={"Bourichi"} label={"username"} full={false} setValue={setUsername} value={username} />
                    </div>
                    <div className="demo-right-form-row">
                        <InputField placeHolder={"Taha"} label={"username"} full={true} setValue={setUsername} value={username} />
                    </div>
                    <div className="demo-right-form-row">
                  <InputField placeHolder={"Taha"} label={"username"} full={true} setValue={setUsername} value={username} />

                    </div>
                    <div className="demo-right-form-row">
                    <InputField placeHolder={"Taha"} label={"username"} full={true} setValue={setUsername} value={username} />

                    </div>
                    <div className="demo-right-form-row">
                    <InputField placeHolder={"Taha"} label={"username"} full={true} setValue={setUsername} value={username} />

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Demo