import React, { Component } from 'react';
import uniqid from 'uniqid';
import propTypes from 'prop-types';
import './userForm.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ userName: event.target.value });
  }

  onSubmit(event) {
    if (this.state.userName === '') {
      event.preventDefault();
      return;
    }
    const user = {
      userName: this.state.userName,
      id: uniqid(),
    };
    this.props.handleSubmit(user);
    event.preventDefault();
    this.setState({ userName: '' });
  }

  render() {
    return (
      <div>
        <form action="" className="user-input-form" onSubmit={this.onSubmit}>
          <label htmlFor="userInput">Add new user: </label>
          <input
            id="userInput"
            value={this.state.userName}
            type="text"
            onChange={this.onChange}
          />
          <button type="submit">Add</button>
        </form>
      </div >
    );
  }
}

UserForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};

export default UserForm;

