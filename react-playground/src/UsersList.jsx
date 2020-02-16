import React from 'react';

const UsersList = ({users}) => {
    return (
        <ul>
            {
                users.map(user=> (
                    <li key={user}>{user}</li>
                ))
            }
        </ul>
     );
}

export default UsersList;