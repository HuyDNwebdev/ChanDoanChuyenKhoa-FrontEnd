import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import { connect } from "react-redux"
import "./UserManage.scss"
import { getAllUsers } from "../../services"

// handleLogin = async () => {
//     this.setState({ errMessage: "" })
//     try {
//       let data = await handleLogin(this.state.username, this.state.password)

//       if (data && data.errCode !== 0) {
//         this.setState({
//           errMessage: data.message,
//         })
//       }

//       if (data && data.errCode === 0) {
//         this.props.userLoginSuccess(data.user)
//         console.log("login succeeds")
//       }
//     } catch (error) {
//       if (error.response) {
//         if (error.response.data) {
//           this.setState({
//             errMessage: error.response.data.message,
//           })
//         }
//       }
//       // console.log(error)
//       //
//     }
//   }

class UserManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrUsers: [],
    }
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL")
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      })
    }
  }

  render() {
    return (
      <div className="user-container">
        <div className="title text-center">Manage users with React</div>
        <div className="user-table mt-3 mx-3">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>

            {this.state.arrUsers &&
              this.state.arrUsers.map((item, index) => {
                console.log("check map", item, index)
                return (
                  <tr className="divClass">
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <button className="btn-edit">
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn-delete">
                        <i class="fas fa-trash"></i>
                      </button>
                    </td>
                    {/* <td>{item.action}</td> */}
                  </tr>
                )
              })}
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManage)
