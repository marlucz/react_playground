import React from "react";

const inputStyle = {
    marginTop:'60px',
    marginLeft:'20px'
}

const SemanticInput = ({ filterUsers }) => (
  <div className="ui left icon input" style={inputStyle}>
    <input
      type="text"
      placeholder="Search users..."
      onInput={e => filterUsers(e)}
    />
    <i className="users icon" />
  </div>
);

export default SemanticInput;
