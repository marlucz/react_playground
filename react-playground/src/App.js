import React from "react";

import { connect } from "react-redux";
import { usersFetched } from "./redux/actions/index";
import { getFilteredUsers } from "./redux/selectors/getFilteredUsers";

import AppHeader from "./appHeader.component/AppHeader";
import UsersList from "./usersList.component/UsersList";
import SemanticInput from "./input.component/SemanticInput";

import "./App.css";

class App extends React.Component {
  state = {};

  componentDidMount = async () => {
    await fetch("https://randomuser.me/api/?format=json&results=10")
      .then(response => response.json())
      .then(json =>
        this.props.usersFetched(
          json.results.map(user => {
            const avatarUrl = user.picture.thumbnail;
            const { title, first, last } = user.name;
            const name = `${title} ${first} ${last}`.trim();
            const phone = user.phone;
            const key = user.login.username;
            return { avatarUrl, name, phone, key };
          })
        )
      );
  };

  render() {
    const { users, isLoading } = this.props;

    return (
      <div>
        <AppHeader />
        <SemanticInput />
        {isLoading ? <UsersList users={users} /> : "Loading data..."}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: getFilteredUsers(state.users, state.usersSearch),
    isLoading: state.users ? true : false
  };
};

const mapDispatchToProps = { usersFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
