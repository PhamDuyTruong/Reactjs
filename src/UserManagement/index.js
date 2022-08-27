import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserForm from "./UserForm";
import { Button } from 'reactstrap';

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: {},
      isOpen: false, // Bật tắt Modal UserForm
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "https://6056f9c1055dbd0017e844c9.mockapi.io/api/users",
      });

      this.setState({ users: result.data });
    } catch (error) {
      console.log(error);
    }
  };

  handleDelete = async (userId) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${userId}`,
      });

      this.fetchUsers();
    } catch (error) {
      console.log(error);       
    }
  };

  handleGetUser = async (userId) => {
    try {
      const result = await axios({
        method: "GET",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${userId}`,
      });

      this.setState({
        selectedUser: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleAddUser = async (user) => {
    try {
      await axios({
        method: "POST",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users`,
        data: user,
      });

      this.fetchUsers();
      this.handleToggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdateUser = async (user) => {
    const { id, ...data } = user;
    try {
      await axios({
        method: "PUT",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${id}`,
        data,
      });

      this.fetchUsers();
      this.handleToggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  handleToggleModal = () =>{
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }))
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">User Management</h1>
        <div className="text-right my-4">
          <Button color="primary" onClick={this.handleToggleModal}>
            Add User
          </Button>
        </div>
        <UserList
          users={this.state.users}
          onDelete={this.handleDelete}
          onGetUser={this.handleGetUser}
        />

        
        <UserForm
            user={this.state.selectedUser}
            onAddUser={this.handleAddUser}
            isOpen = {this.state.isOpen}
            onToggle = {this.handleToggleModal}
        />

      
      </div>
    );
  }
}
