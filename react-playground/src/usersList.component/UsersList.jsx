import React from "react";
import AppContext from "../context";

import UserItem from "../userItem.component/UserItem";

const UsersList = () => (
  <AppContext.Consumer>
    {({filteredUsers}) => {
      if (filteredUsers.length > 0) {
        return (
          <ul className="ui realxed divided list">
            {filteredUsers.map(user => (
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
    }}
  </AppContext.Consumer>
);

export default UsersList;
