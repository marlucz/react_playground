import React from "react";

const UserItem = ({ avatarUrl, name, phone }) => {

  return (
    <li className="item">
      <img src={avatarUrl} className="ui mini rounded image" alt="" />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{phone}</div>
      </div>
    </li>
  );
};

export default UserItem;
