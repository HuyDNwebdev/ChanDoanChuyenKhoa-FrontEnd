import React, { Component } from "react"
// import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import "./Specialty.scss"
import { FormattedMessage } from "react-intl"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import LeftArrow from "../../../assets/left-arrow.svg"

import RightArrow from "../../../assets/right-arrow.svg"
import XuongKhop from "../../../assets/co-xuong-khop.jpg"
import ThanKinh from "../../../assets/than-kinh.jpg"
import TieuHoa from "../../../assets/tieu-hoa.jpg"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img
    src={LeftArrow}
    alt="prevArrow"
    {...props}
    style={{
      height: "18%",
      width: "4%",
      borderRadius: "50%",
      padding: "6px",
      backgroundColor: "white",
    }}
  />
)

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img
    src={RightArrow}
    alt="nextArrow"
    {...props}
    style={{
      height: "18%",
      width: "4%",
      borderRadius: "50%",
      padding: "6px",
      backgroundColor: "white",
    }}
  />
)

const dataTop = [
  {
    url: XuongKhop,
    name: "Xương Khớp",
  },
  {
    url: ThanKinh,
    name: "Thần Kinh",
  },
  {
    url: TieuHoa,
    name: "Tiêu Hóa",
  },
  {
    url: "https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg",
  },
  { url: "https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg" },
  {
    url: "https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg",
  },
]
class Specialty extends Component {
  render() {
    // console.log(XuongKhop)

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
      <div className="card__container">
        <h2>{"Chuyên khoa phổ biến"}</h2>
        <Slider {...settings} className="card__container--inner">
          {dataTop.map((item, index) => {
            return (
              <div className="card__container--inner--card" key={index}>
                <img src={item.url} alt="hero_img" />

                <div className="card__container--inner--card--date_time">
                  <img src="https://www.wanderon.in/svg/clock.svg" alt="time" />
                  <p>1D-2D</p>

                  <img
                    src="https://www.wanderon.in/svg/map-pin.svg"
                    alt="location"
                    style={{ marginLeft: 10 }}
                  />
                  <p>Viet Nam</p>
                </div>
                <h3>{item.name}</h3>
              </div>
            )
          })}
        </Slider>
        <div className="specialty-more">
          <a href="" className="more">
            Xem thêm
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Specialty)
