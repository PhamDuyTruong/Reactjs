import React, { Component } from "react";
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, FormGroup, Label, Input} from 'reactstrap'

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Lưu trữ giá trị của các ô input
      values: {
        username: "",
        email: "",
        phone: "",
        fullName: "",
        address: "",
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.id && prevProps.user.id !== this.props.user.id) {
      this.setState({
        values: this.props.user,
      });
    }
  }

  handleChange = (event) => {
    // this.setState({
    //   values: {
    //     username: event.target.value, // Sẽ bị mất những key khác
    //   },
    // });

    const { name, value } = event.target;
    console.log("name:", name, "value:", value);

    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
  };

  handleSubmit = () => {
    if (this.state.values.id) {
      this.props.onUpdateUser(this.state.values);
    } else {
      this.props.onAddUser(this.state.values);
    }

    this.setState({
      values: {
        username: "",
        email: "",
        phone: "",
        fullName: "",
        address: "",
      },
    });
  };

  render() {
    return (
      <Modal isOpen ={this.props.isOpen} toggle={this.props.onToggle}>
        <ModalHeader>User Form</ModalHeader>
        <ModalBody>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input 
                  type="text"
                  id="username"
                  name="username"
                  value={this.state.values.username}
                  onChange={this.handleChange} 
              />
            </FormGroup>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={this.state.values.email}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={this.state.values.phone}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={this.state.values.fullName}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={this.state.values.address}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={this.handleSubmit}>Submit</Button>
            <Button color="danger" onClick={this.props.onToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
