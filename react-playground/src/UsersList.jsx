import React from "react";

const UsersList = ({ users, selectUser }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => (
          <li key={user} onClick={() => selectUser(user)}>{user}</li>
        ))}
      </ul>
    );
  }

  return <p>No results!</p>;
};

export default UsersList;
