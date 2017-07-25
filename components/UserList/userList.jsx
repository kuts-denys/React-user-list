import React, { Component } from 'react';
import UserForm from '../UserForm/userForm';
import UserView from '../UserView/userView';
import './userList.css';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.users.length !== this.state.users.length;
  }

  handleDelete(id) {
    const users = [...this.state.users];
    users.splice(users.findIndex(user => user.id === id), 1);
    this.setState({ users });
  }

  handleSubmit(user) {
    this.setState({ users: [...this.state.users, user] });
  }

  render() {
    return (
      <div className="user-list">
        <UserForm handleSubmit={this.handleSubmit} />
        <UserView userList={this.state.users} handleDelete={this.handleDelete} />
      </div>
    );
  }
}


export default UserList;
