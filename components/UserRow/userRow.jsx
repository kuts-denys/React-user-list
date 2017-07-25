import React from 'react';
import propTypes from 'prop-types';
import './userRow.css';

// Первоначальный вариант

// class UserRow extends Component {
//   constructor(props) {
//     super(props);
//     this.onDelete = this.onDelete.bind(this);
//   }

//   onDelete() {
//     this.props.onUserDelete(this.props.user.id);
//   }

//   render() {
//     const user = this.props.user;
//     return (
//       <li className="user-row">
//         <span>{user.userName}</span>
//         <button type="submit" onClick={this.onDelete}>Delete</button>
//       </li>
//     );
//   }
// }

// Вроде получше, сделал stateless functional component

const UserRow = ({ user, onUserDelete }) => (
  <li className="user-row">
    <span>Username: {user.userName}</span>
    <button type="submit" onClick={onUserDelete}>Delete</button>
  </li>
);

UserRow.propTypes = {
  onUserDelete: propTypes.func.isRequired,
  user: propTypes.shape({
    id: propTypes.string.isRequired,
    userName: propTypes.string.isRequired,
  }).isRequired,
};

export default UserRow;
