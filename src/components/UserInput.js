import React from 'react';
import Button from './Button';

import './UserInput.css';

const UserInput = () => {
    return (
        <div>
        <form>
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