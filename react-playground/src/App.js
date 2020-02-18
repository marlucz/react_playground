import React from "react";

import { connect } from "react-redux";
import { usersFetched } from "./redux/actions/index";

import AppHeader from "./appHeader.component/AppHeader";
import UsersList from "./usersList.component/UsersList";
import SemanticInput from "./input.component/SemanticInput";

import AppContext from "./context";

import "./App.css";

class App extends React.Component {
  state = {
    usersList: null,
    filteredUsers: null,
    inputValue: ""
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

  handleInputChange = e => {
    const input = e.target.value;
    const filteredUsers = this.getFilteredUsersFromInput(input);
    this.setState({
      filteredUsers,
      inputValue: input
    });
  };

  render() {
    const { filteredUsers } = this.state;
    const contextElements = {
      ...this.state,
      filterUsers: this.handleInputChange
    };

    return (
      <div>
        <AppHeader />
        <AppContext.Provider value={contextElements}>
          <SemanticInput />
          {filteredUsers ? <UsersList /> : "Loading data..."}
        </AppContext.Provider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.conta
  };
};

export default App;
