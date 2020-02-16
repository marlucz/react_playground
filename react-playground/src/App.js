import React from "react";

import AppHeader from "./AppHeader";
import UsersList from "./UsersList";

import "./App.css";

class App extends React.Component {
  state = {
    usersList: null,
    filteredUsers: null
  };

  componentDidMount = async () => {
    const usersList = await fetch(
      "https://randomuser.me/api/?format=json&results=10"
    )
      .then(response => response.json())
      .then(json => {
        return json.results.map(user => {
          const avatarUrl = user.picture.thumbnail;
          const { title, first, last } = user.name;
          const name = `${title} ${first} ${last}`.trim();
          const phone = user.phone;
          const key = user.login.username;
          return { avatarUrl, name, phone, key };
        });
      });

    this.setState({
      usersList,
      filteredUsers: usersList
    });
  };

  getFilteredUsersFromInput = input => {
    return this.state.usersList.filter(({ name }) =>
      name.toLowerCase().includes(input.toLowerCase())
    );
  };

  filterUsers = e => {
    const input = e.target.value;
    const filteredUsers = this.getFilteredUsersFromInput(input);
    this.setState({
      filteredUsers
    });
  };

  render() {
    const { filteredUsers } = this.state;

    return (
      <div>
        <AppHeader />
        <input onInput={this.filterUsers} />
        {filteredUsers ? (
          <UsersList
            selectUser={this.onUserSelected}
            usersList={filteredUsers}
          />
        ) : (
          "Loading data..."
        )}
      </div>
    );
  }
}

export default App;
