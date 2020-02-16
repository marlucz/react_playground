import React from "react";

import UsersList from "./UsersList";

import "./App.css";

class App extends React.Component {
  state = {
    usersList: [],
    filteredUsers: [],
    selectedUser: null
  };

  componentDidMount = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => json.map(({ name }) => name));
    this.setState({
      usersList: users,
      filteredUsers: users
    });
  };

  getFilteredUsersFromInput = input => {
    return this.state.usersList.filter(user =>
      user.toLowerCase().includes(input.toLowerCase())
    );
  };

  onUserSelected = selectedUser => {
    this.setState({
      selectedUser
    });
  };

  filterUsers = e => {
    const input = e.target.value;
    const filteredUsers = this.getFilteredUsersFromInput(input);
    this.setState({
      filteredUsers: filteredUsers
    });
  };

  render() {
    const { filteredUsers, selectedUser } = this.state;

    return (
      <div>
        <input onInput={this.filterUsers} />
        <UsersList selectUser={this.onUserSelected} users={filteredUsers} />
        {selectedUser ? <div>{selectedUser}</div> : ""}
      </div>
    );
  }
}

export default App;
