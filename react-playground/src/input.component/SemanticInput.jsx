import React from "react";
import AppContext from "../context";

const inputStyle = {
  marginTop: "60px",
  marginLeft: "20px"
};

const SemanticInput = () => (
  <div className="ui left icon input" style={inputStyle}>
    <AppContext.Consumer>
      {({inputValue, filterUsers}) => (
        <input
          type="text"
          placeholder="Search users..."
          value={inputValue}
          onChange={(e) => filterUsers(e)}
        />
      )}
    </AppContext.Consumer>
    <i className="users icon" />
  </div>
);

export default SemanticInput;
