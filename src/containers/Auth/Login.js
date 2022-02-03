import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"

import * as actions from "../../store/actions"
// import * as actions from "../store/actions"

import "./Login.scss"
// import { FormattedMessage } from "react-intl"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "huydang",
      password: "123456",
      isShowPassword: false,
    }
  }

  handleOnChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }
  handleOnChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  handleLogin = () => {
    console.log("all state: ", this.state)
  }
  handleShowHidePassword = () => {
    this.setState({ isShowPassword: !this.state.isShowPassword })
  }

  render() {
    //jsx

    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(e) => this.handleOnChangePassword(e)}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <i
                    class={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12 ">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin()
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password</span>
            </div>
            <div className="col-12 text-center mt-5">
              <span className="text-other-login">Or sign in with:</span>
            </div>
            <div className="col-12 social-login ">
              <i class="fab fa-google-plus-g google"></i>
              <i class="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
