import React from 'react';

import './ListItem.css';

const ListItem = props => {
    return (
        <div className="list-item">
            <p>{props.name} ({props.age} years old)</p>
        </div>
    );
}

export default ListItem;