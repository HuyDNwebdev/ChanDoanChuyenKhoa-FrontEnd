import React, { Component } from "react"
import { connect } from "react-redux"

import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap"

class ModalUser extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent()
    console.log("Vo dc toggle")
  }
  render() {
    console.log("Check child props", this.props)
    // console.log("Check child open modal", this.props.isOpen)
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Create a new user</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis mo exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={function noRefCheck() {}}>
              Do Something
            </Button>{" "}
            <Button onClick={function noRefCheck() {}}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser)
