import React from "react";

import { connect } from "react-redux";
import { searchUsers } from "../redux/actions/index";

const inputStyle = {
  marginTop: "60px",
  marginLeft: "20px"
};

class SemanticInput extends React.Component {
  render() {
    const { usersSearch } = this.props;

    return (
      <div className="ui left icon input" style={inputStyle}>
        <input
          type="text"
          placeholder="Search users..."
          value={usersSearch}
          onChange={e => this.handleSearchChange(e)}
        />
        <i className="users icon" />
      </div>
    );
  }

  handleSearchChange = e => {
    this.props.searchUsers(e.currentTarget.value);
  };
}

const mapStateToProps = state => {
  return {
    usersSearch: state.usersSearch
  };
};

const mapDispatchToProps = { searchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(SemanticInput);
