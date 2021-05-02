import React, { useState } from 'react';

import UserInput from './components/UserInput';
import UserList from './components/UserList';
import Modal from './components/Modal';

import './App.css';


function App() {

  const [data, setData] = useState([]);
  const [inValid, setInValid] = useState(false);
  const [age, setAge] = useState(1);

  const onInputSubmit = (newUser) => {
    setData([...data, newUser]);
  }

  const onModalClose = () => {
    setInValid(false);
    setAge(1);
  }

  
  let content;
  if(data.length > 0) {
    content = (<UserList data={data}></UserList>);
    
  }

  let modal = ('');
  if(inValid) {
    modal = (<Modal ageData={age} modalCloseHandler={onModalClose}></Modal>);
  }



  const inValidInput = (age) => {
    if(age < 0) {
      setAge(age);
    }
    setInValid(true);
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
