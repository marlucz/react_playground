import React from "react";

import UsersList from "./UsersList";

import "./App.css";

class App extends React.Component {
  state = {
    usersList: [],
    filteredUsers: []
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

  filterUsers = e => {
    const input = e.target.value;
    const filteredUsers = this.getFilteredUsersFromInput(input);
    this.setState({
      filteredUsers: filteredUsers
    });
  };

  render() {
    const { filteredUsers } = this.state;

    return (
      <div>
        <input onInput={this.filterUsers} />
        <UsersList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
