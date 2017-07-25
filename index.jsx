import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/UserList/userList';


const App = () => <UserList />;

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
