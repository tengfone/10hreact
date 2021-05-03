import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({name:'peter',age:24,message:'Random Message'})
  const changeMessage = () => {
    setPerson({...person,message: 'hello world'})
  }
  return <React.Fragment>
    <h3>{person.name}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>Change Message</button>
  </React.Fragment>
};

export default UseStateObject;
