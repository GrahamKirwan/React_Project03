import React, { useState} from 'react';
import Button from './Button';

import './UserInput.css';

const UserInput = props => {

    const [usernameValue, setUsernameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');

    const formEventHandler = e => {
        e.preventDefault();
        let newUser = {key: Math.random(), name: e.target[0].value, age: parseInt(e.target[1].value)}
        if(newUser.name.length === 0 || !newUser.age ? props.inValidHandler : console.log('nice'))
        props.inputHandler(newUser);
        setUsernameValue('');
        setAgeValue('');
    }

    const updateUsernameHandler = e => {
        setUsernameValue(e.target.value)
    }
    const updateAgeHandler = e => {
        setAgeValue(e.target.value)
    }

    return (
        <div>
        <form onSubmit={formEventHandler}>
            <div>
                <label>Username</label>
                <input type="text" value={usernameValue} onChange={updateUsernameHandler}></input>
                <label>Age (Years)</label>
                <input type="number" value={ageValue} onChange={updateAgeHandler}></input>
            </div>
            <Button type="submit">Add User</Button>
        </form>
        </div>
    );
}

export default UserInput;