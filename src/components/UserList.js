import React from 'react';
import ListItem from './ListItem';

import './UserList.css';

const UserList = props => {
    return (
        <ul className="user-list">
            {props.data.map(user => (
                <ListItem name={user.name} age={user.age}></ListItem>
            ))}
            
        </ul>

    );
}

export default UserList;