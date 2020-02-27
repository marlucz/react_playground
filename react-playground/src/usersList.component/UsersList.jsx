import React from "react";

import UserItem from "../userItem.component/UserItem";

class UsersList extends React.Component {
  userToItem = user => {
    const avatarUrl = user.picture.thumbnail;
    const { title, first, last } = user.name;
    const name = `${title} ${first} ${last}`.trim();
    const phone = user.phone;
    const key = user.login.username;
    return (
      <UserItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} />
    );
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.users.map(this.userToItem)}
      </ul>
    );
  }
}

export default UsersList;
