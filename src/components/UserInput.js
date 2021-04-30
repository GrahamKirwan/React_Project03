import React from 'react';
import Button from './Button';

import './UserInput.css';

const UserInput = props => {

    const formEventHandler = e => {
        e.preventDefault();
        let newUser = {name: e.target[0].value, age: parseInt(e.target[1].value)}
        console.log(newUser)
        props.inputHandler(newUser);
    }

    return (
        <div>
        <form onSubmit={formEventHandler}>
            <div>
                <label>Username</label>
                <input type="text"></input>
                <label>Age (Years)</label>
                <input type="number"></input>
            </div>
            <Button type="submit">Add User</Button>
        </form>
        </div>
    );
}

export default UserInput;