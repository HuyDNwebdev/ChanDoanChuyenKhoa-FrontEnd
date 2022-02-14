import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import { connect } from "react-redux"

import { getAllCodeService } from "../../../services"
import { LANGUAGES } from "../../../utils"

class UserRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genderArr: [],
    }
  }

  async componentDidMount() {
    try {
      let res = await getAllCodeService("gender")
      if (res && res.errCode === 0) {
        this.setState({
          genderArr: res.data,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    let genders = this.state.genderArr
    let language = this.props.language
    return (
      <div className="user-redux-conatainer">
        <div className="title">User Redux Container</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <FormattedMessage id="manage-user.add" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.email" />
                </label>
                <input className="form-control" type="email" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.password" />
                </label>
                <input className="form-control" type="password" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.firstName" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.lastName" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.phone" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-9">
                <label>
                  <FormattedMessage id="manage-user.address" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <select name="gender" className="form-select">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      )
                    })}
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.roleId" />
                </label>
                <select name="gender" className="form-select">
                  <option> Choose ...</option>
                  <option> ...</option>
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.position" />
                </label>
                <select name="gender" className="form-select">
                  <option> Choose ...</option>
                  <option> ...</option>
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.image" />
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12">
                <button className="btn btn-primary">
                  <FormattedMessage id="manage-user.submit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux)
