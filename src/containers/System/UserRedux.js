import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import { connect } from "react-redux"
class UserRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //   componentDidMount() {}

  render() {
    return (
      <div className="user-redux-conatainer">
        <div className="title">User Redux Container</div>
        <div className="user-redux-body">User Redux</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux)
