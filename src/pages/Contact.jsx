import React, { useState } from 'react'
import "../assets/css/contact.css"
import InputField from '../components/InputField'
import Button from '../components/Button'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Speciality from '../components/Speciality';
const Contact = () => {
    const [username,setUsername] = useState("")
  return (
    <div className="contact-container">
        <div className="contact-container-content">
            <div className="contact-container-content-left">
                <h1 className="contact-left-title">Neem <span>contact</span> op</h1>
                <h3 className="contact-left-subtitle">Benieuwd wat wij voor jouw organisatie kunnen betekenen? Laat je gegevens achter en we nemen contact met je op.</h3>
                <h5 className="contact-left-subtitle-sub">
                    <span>Neem contact op</span>
                    <span className='sm'>* veld verplicht</span>
                </h5>
                <InputField placeHolder={""} label={"E-mailadres"} full={true} setValue={setUsername} value={username} />
                <InputField placeHolder={""} label={"Voornaam"} full={true} setValue={setUsername} value={username} />
                <InputField placeHolder={""} label={"Achternaam"} required={false} full={true} setValue={setUsername} value={username} />
                <InputField placeHolder={""} label={"Bedrijf"} required={false} full={true} setValue={setUsername} value={username} />
                <InputField placeHolder={""} label={"Telefoon"} required={false} full={true} setValue={setUsername} value={username} />
                <InputField placeHolder={""} label={"Bericht"} required={false} full={true} setValue={setUsername} value={username} />
                <Button text={"Neem contact op"} />

            </div>
            <div className="contact-container-content-right">
                <h4 className="contact-right-location">
                Locatie<br/>Tangier, Morocco<br/>56L 1101 BE<br/>Tangier
                </h4>
                <Button text={"Email@gmail.com"} Icon={EmailIcon} />
                <Button text={"Maps"} Icon={LocationOnIcon} />

            </div>
            <div className="contact-banner">
                <Speciality button={false} title='Voor vragen staan wij graag voor jou klaar' />
            </div>
        </div>
    </div>
  )
}

export default Contact