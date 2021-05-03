import React, { useState } from 'react';

// if function consist of useXXXXX,
// component name must be uppercase like UseStateOlol etc

const UseStateBasics = () => {
  // [value,functional()]
  // const value = useState(1)[0] // [1,xxx]
  // const handler = useState(1)[1] // [xxx,function ]
  const [text,setText] = useState('Default Text')// destruction
  const handleClick = () => {
    if (text === 'Default Text'){
      setText('Setted Text')
    }
    else {
      setText('Default Text')
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>Change Text</button>
  </React.Fragment>
};

export default UseStateBasics;
