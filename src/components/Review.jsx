import React from 'react'
import "../assets/css/review.css"
import img from '../assets/images/Dennis-Stenfert-1.png'
// import Button from './Button'
import SectionTitle from './SectionTitle'
const Review = () => {
  return (
    <div className="reviews-section-container">
      <SectionTitle text='Reviews about <span>Aideat</span> from Our Clients' />
      <div className="reviews-section-card-container">
        <div className="reviews-section-card">
          <h3 className="reviews-section-card-owner">Dennis Stenfert</h3>
          <h5 className="reviews-section-card-job">Director at Transportial</h5>
          <p className="reviews-section-card-review"><span>Aideat</span> has created a team for Transportial to excel within the transportation sector and advance it forwards into a digital future.</p>
          <span className="reviews-section-card-img-container">
            <img src={img} alt="" className="reviews-section-card-img" />
          </span>
        </div>
      </div>
      {/* <Button text={"Read More"} /> */}
    </div>
  )
}

export default Review