import React, { Component } from "react"
import "./UserManage.scss"
import { connect } from "react-redux"

import { getAllUsers } from "../../services"
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
    // this.setState({
    //   isOpenModalUser: !this.state.isOpenModalUser,
    // })
    console.log("Vo dc toggleUserModal")
  }

  render() {
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={() => this.toggleUserModall}
        />
        <div className="title text-center">Manage users with React</div>
        <div className="mx-3">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleAddnewUser()}
          >
            <i class="fas fa-plus"></i> Add new user
          </button>
        </div>
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
