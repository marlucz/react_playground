import React from "react";

const inputStyle = {
    marginTop:'60px',
    marginLeft:'20px'
}

const SemanticInput = ({ inputValue, filterUsers }) => (
  <div className="ui left icon input" style={inputStyle}>
    <input
      type="text"
      placeholder="Search users..."
      value={inputValue}
      onChange={filterUsers}
    />
    <i className="users icon" />
  </div>
);

export default SemanticInput;
