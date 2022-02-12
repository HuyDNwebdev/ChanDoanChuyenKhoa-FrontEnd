import React, { Component } from "react"
import { connect } from "react-redux"
import HomeHeader from "./HomeHeader"
import "./HomePage.scss"
import Specialty from "./Section/Specialty"
import MedicalFacility from "./Section/MedicalFacility"
import OutstandingDoctor from "./Section/OutstandingDoctor"
import HandBook from "./Section/HandBook"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import LeftArrow from "../../assets/left-arrow.svg"
import RightArrow from "../../assets/right-arrow.svg"
import {
  dataSpecialty,
  dataFacility,
  dataDoctor,
  dataHandBook,
} from "./Section/dataSection"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" {...props} />
)

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={RightArrow} alt="nextArrow" {...props} />
)

class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    }
    return (
      <div>
        <HomeHeader />
        <Specialty settings={settings} specialty={dataSpecialty} />
        <MedicalFacility settings={settings} medicalFacility={dataFacility} />

        <OutstandingDoctor settings={settings} doctor={dataDoctor} />
        <HandBook settings={settings} dataHandBook={dataHandBook} />
        <div style={{ height: "400px" }}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
