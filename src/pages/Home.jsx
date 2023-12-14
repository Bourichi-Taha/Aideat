import React from 'react'
import "../assets/css/home.css"
import Banner from '../components/Banner'
import Why from '../components/Why'
import Trusted from '../components/Trusted'
import Review from '../components/Review'
import Speciality from '../components/Speciality'
// import Demo from '../components/Demo'
const Home = () => {
  // #ebf5f4
  return (
    <div className="home-container">
        <Banner />
        <Why />
        <Trusted />
        <Review />
        <Speciality />
        {/* <Demo/> */}
    </div>
  )
}

export default Home