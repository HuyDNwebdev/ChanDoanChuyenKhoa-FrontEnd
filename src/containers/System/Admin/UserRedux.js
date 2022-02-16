import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import { connect } from "react-redux"

import { LANGUAGES } from "../../../utils"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import * as actions from "../../../store/actions"
import "./UserRedux.scss"

class UserRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
      file: "",
      imagePreviewUrl: "",
      isOpenImage: false,

      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      position: "",
      gender: "",
      role: "",
      avatar: "",
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
      let arrGenders = this.props.genderRedux
      this.setState({
        genderArr: arrGenders,
        gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : "",
      })
    }
    if (prevProps.position !== this.props.position) {
      let arrPositions = this.props.position
      this.setState({
        positionArr: arrPositions,
        position:
          arrPositions && arrPositions.length > 0 ? arrPositions[0].key : "",
      })
    }
    if (prevProps.role !== this.props.role) {
      let arrRoles = this.props.role
      this.setState({
        roleArr: this.props.role,
        role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : "",
      })
    }
  }
  handleOnChangeImage = (e) => {
    let file = e.target.files[0]
    if (file) {
      let fileUrl = URL.createObjectURL(file)
      this.setState({
        imagePreviewUrl: fileUrl,
        avatar: file,
      })
    }
  }

  onChangeInput = (event, id) => {
    let copyState = { ...this.state } // remove

    copyState[id] = event.target.value

    this.setState({
      ...copyState,
    })
  }

  openPreViewImage = () => {
    if (!this.state.imagePreviewUrl) return
    this.setState({ isOpenImage: true })
  }

  checkValidateInput = () => {
    let isValid = true
    let arrCheck = [
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNumber",
      "address",
    ]
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false
        alert("This field is required: " + arrCheck[i])
        break
      }
    }
    return isValid
  }

  handleSaveUser = () => {
    let isValid = this.checkValidateInput()
    if (!isValid) return

    //fire redux action

    console.log("before submit check state  ", this.state)
    this.props.createNewUser({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      gender: this.state.gender,
      phoneNumber: this.state.phoneNumber,
      roleId: this.state.role,
      positionId: this.state.position,
      image: this.state.imagePreviewUrl,
    })
  }

  render() {
    let genders = this.state.genderArr
    let positions = this.state.positionArr
    let roles = this.state.roleArr
    let language = this.props.language
    let isLoadingGender = this.props.isLoadingGender
    let isOpenImage = this.state.isOpenImage
    let imagePreviewUrl = this.state.imagePreviewUrl

    let { email, password, firstName, lastName, phoneNumber, address } =
      this.state

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
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    this.onChangeInput(event, "email")
                  }}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.password" />
                </label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    this.onChangeInput(event, "password")
                  }}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.firstName" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={firstName}
                  onChange={(event) => {
                    this.onChangeInput(event, "firstName")
                  }}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.lastName" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={lastName}
                  onChange={(event) => {
                    this.onChangeInput(event, "lastName")
                  }}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.phone" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={phoneNumber}
                  onChange={(event) => {
                    this.onChangeInput(event, "phoneNumber")
                  }}
                />
              </div>
              <div className="col-9">
                <label>
                  <FormattedMessage id="manage-user.address" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={address}
                  onChange={(event) => {
                    this.onChangeInput(event, "address")
                  }}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <select
                  name="gender"
                  className="form-select"
                  onChange={(event) => {
                    this.onChangeInput(event, "gender")
                  }}
                >
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
                <select
                  name="role"
                  className="form-select"
                  onChange={(event) => {
                    this.onChangeInput(event, "role")
                  }}
                >
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
                <select
                  name="position"
                  className="form-select"
                  onChange={(event) => {
                    this.onChangeInput(event, "position")
                  }}
                >
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
                <div className="preview-img-container">
                  <input
                    id="previewImg"
                    type="file"
                    hidden
                    onChange={(e) => this.handleOnChangeImage(e)}
                  />
                  <label className="label-upload" htmlFor="previewImg">
                    Tải ảnh <i className="fas fa-upload"></i>
                  </label>

                  <div
                    className="preview-img"
                    style={{
                      backgroundImage: `url(${imagePreviewUrl})`,
                    }}
                    onClick={() => this.openPreViewImage()}
                  ></div>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleSaveUser()}
                >
                  <FormattedMessage id="manage-user.submit" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpenImage && (
          <Lightbox
            mainSrc={imagePreviewUrl}
            onCloseRequest={() => this.setState({ isOpenImage: false })}
          />
        )}
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
    createNewUser: (data) => dispatch(actions.createNewUser(data)),
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
