import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import HomeHeader from "./HomeHeader"
import Specialty from "./Section/Specialty"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const dataTop = [
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
class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Specialty />

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
