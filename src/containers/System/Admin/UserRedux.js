import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import { connect } from "react-redux"

import { LANGUAGES } from "../../../utils"

import * as actions from "../../../store/actions"

class UserRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
    }
  }

  async componentDidMount() {
    // try {
    //   let res = await getAllCodeService("gender")
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     })
    //   }
    // } catch (error) {
    //   console.log(error)
    // } -- The easy way
    this.props.getGenderStart() /* -- The redux way */
    this.props.getPositionStart() /* -- The redux way */
    this.props.getRoleStart() /* -- The redux way */
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //render => didupdate
    //hien tai (this) va qua khu (previous)
    //[] [3] => setState

    // [3] [3] => out
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      })
    }
    if (prevProps.position !== this.props.position) {
      this.setState({
        positionArr: this.props.position,
      })
    }
    if (prevProps.role !== this.props.role) {
      this.setState({
        roleArr: this.props.role,
      })
    }
  }

  render() {
    let genders = this.state.genderArr
    let positions = this.state.positionArr
    let roles = this.state.roleArr
    // console.log(roles)

    let language = this.props.language
    let isLoadingGender = this.props.isLoadingGender

    return (
      <div className="user-redux-conatainer">
        <div className="title">User Redux Container</div>

        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {isLoadingGender === true ? "Loading Gender" : ""}
              </div>
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
                <select name="role" className="form-select">
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
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
                  <FormattedMessage id="manage-user.position" />
                </label>
                <select name="position" className="form-select">
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
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
  return {
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguages: (lang) => dispatch(actions.changeLanguageApp(lang)),
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    isLoadingGender: state.admin.isLoadingGender,
    position: state.admin.positions,
    role: state.admin.roles,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux)
