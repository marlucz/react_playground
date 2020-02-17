import React from "react";

import UserItem from "../userItem.component/UserItem";

const UsersList = ({ usersList}) => {
  if (usersList.length > 0) {
    return (
      <ul className="ui realxed divided list">
        {usersList.map(user => (
          <UserItem
            key={user.key}
            avatarUrl={user.avatarUrl}
            name={user.name}
            phone={user.phone}
          />
        ))}
      </ul>
    );
  }

  return <p>No results!</p>;
};

export default UsersList;
