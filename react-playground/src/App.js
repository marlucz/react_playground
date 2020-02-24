import React from "react";

import { connect } from "react-redux";
import { fetchUsers } from "./redux/actions/index";
import { getFilteredUsers } from "./redux/selectors/getFilteredUsers";

import AppHeader from "./appHeader.component/AppHeader";
import UsersList from "./usersList.component/UsersList";
import SemanticInput from "./input.component/SemanticInput";
import SeedPicker from "./SeedPicker/SeedPicker";

import "./App.css";

class App extends React.Component {
  state = {};

  componentDidMount = () => {
    this.props.fetchUsers();
  };

  render() {
    const { users, isLoading } = this.props;

    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <form className="ui large form">
            <div className="ui segment">
              <SeedPicker />
              <SemanticInput />
            </div>
          </form>
          {isLoading ? <UsersList users={users} /> : "Loading data..."}
        </main>
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

const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(App);
