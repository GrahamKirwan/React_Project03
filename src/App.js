import React, { useState } from 'react';

import UserInput from './components/UserInput';
import UserList from './components/UserList';
import Modal from './components/Modal';

import './App.css';


function App() {

  const [data, setData] = useState([]);
  const [inValid, setInValid] = useState(false);

  const onInputSubmit = (newUser) => {
    setData([...data, newUser]);
  }

  
  let content;
  if(data.length > 0) {
    content = (<UserList data={data}></UserList>);
    
  }

  let modal = ('');
  if(inValid) {
    modal = (<Modal></Modal>);
  }

  const inValidInput = () => {
    console.log('invalid from app.js')
  }
 
  return (
    <div className="app">
      <UserInput inputHandler={onInputSubmit} inValidHandler={inValidInput}></UserInput>
      {content}
      {modal}
    </div>
  );
}

export default App;
