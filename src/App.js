import React, { useState } from 'react';

import UserInput from './components/UserInput';
import UserList from './components/UserList';

import './App.css';


function App() {

  const [data, setData] = useState([
    // {name: 'Graham', age: 26 },
    // {name: 'Cathal', age: 28 },
    // {name: 'Cathal', age: 28 },
  ]);

  const onInputSubmit = (newUser) => {
    setData([...data, newUser]);
  }

  
  let content;

  if(data.length > 0) {
    content = (<UserList data={data}></UserList>);
    
  }

  return (
    <div className="app">
      <UserInput inputHandler={onInputSubmit}></UserInput>
      {content}
    </div>
  );
}

export default App;
