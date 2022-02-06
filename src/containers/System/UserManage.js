import React, { Component } from "react"
import "./UserManage.scss"
import { connect } from "react-redux"

import { getAllUsers, createNewUserService } from "../../services"
import ModalUser from "./ModalUser"

class UserManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    }
  }

  async componentDidMount() {
    await this.getAllUsersFromReact()
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL")
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      })
    }
  }

  handleAddnewUser = () => {
    this.setState({
      isOpenModalUser: true,
    })
  }

  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    })
  }

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data)
      if (response && response.errCode !== 0) {
        alert(response.errMessage)
      } else {
        await this.getAllUsersFromReact()
        this.toggleUserModal()
      }
    } catch (e) {
      console.log(e)
    }
    // console.log(data)
  }

  render() {
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        <div className="title text-center">Manage users with React</div>
        <div className="mx-3">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleAddnewUser()}
          >
            <i className="fas fa-plus"></i> Add new user
          </button>
        </div>
        <div className="user-table mt-3 mx-3">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>

              {this.state.arrUsers &&
                this.state.arrUsers.map((item, index) => {
                  return (
                    <tr className="divClass" key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn-edit">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn-delete">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                      {/* <td>{item.action}</td> */}
                    </tr>
                  )
                })}
            </tbody>
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
