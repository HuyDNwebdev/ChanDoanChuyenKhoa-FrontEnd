import React, { Component } from "react"
import { connect } from "react-redux"
import "./OutstandingDoctor.scss"
import { FormattedMessage } from "react-intl"

import Slider from "react-slick"

class OutstandingDoctor extends Component {
  render() {
    return (
      <div className="section-container section-doctor ">
        <div className="section-title">Bác sĩ nổi bật tuần qua</div>
        <Slider {...this.props.settings} className="section-content">
          {this.props.doctor.map((item, index) => {
            return (
              <div className="section-content-card" key={index}>
                <img className="doctor-image" src={item.url} alt="hero_img" />

                <div className="section-content-date-time">
                  <img
                    src="https://www.wanderon.in/svg/map-pin.svg"
                    alt="location"
                    // style={{ marginLeft: "80px", marginTop: "10px" }}
                    className="icon-location"
                  />

                  <p className="card-location">Viet Nam</p>
                </div>
                <div className="card-name">
                  <div className="name">{item.name}</div>
                  <div className="field">{item.field}</div>
                </div>
              </div>
            )
          })}
        </Slider>
        <button className="section-more">tìm kiếm</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor)
