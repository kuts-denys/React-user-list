import React from 'react';
import propTypes from 'prop-types';
import UserRow from '../UserRow/userRow';
import './userView.css';

// Первоначальный вариант

// class UserView extends Component {
//   constructor(props) {
//     super(props);
//     this.onUserDelete = this.onUserDelete.bind(this);
//   }

//   onUserDelete(id) {
//     this.props.handleDelete(id);
//   }

//   render() {
//     return (
//       <ul className="user-table">
//         {this.props.userList.map(user => (
//           <UserRow key={user.id} user={user} onUserDelete={this.onUserDelete} />
//         ))}
//       </ul>
//     );
//   }
// }

// Поймал дзен, еще один stateless компонент получился, намного более понятный и компактный

const UserView = ({ handleDelete, userList }) => (
  <ul className="user-table">
    {userList.map(user => (
      <UserRow key={user.id} user={user} onUserDelete={() => handleDelete(user.id)} />
    ))}
  </ul>
);


UserView.propTypes = {
  userList: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    userName: propTypes.string.isRequired,
  })).isRequired,
  handleDelete: propTypes.func.isRequired,
};

export default UserView;
