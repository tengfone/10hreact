import React, { useState, useEffect } from 'react';
// by default runs after every re-render *same like componentdidmount*
// cleanup function
// second parameter
// useeffect works outside the componenet
// console.log is considered side Effects also
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  // useEffect(() => { // CANNOT PUT CALL HOOKS IN A CONDITIONALLY
  //   if (value > 1) {
  //     document.title = `New Messages(${value})`
  //   }
  // },[]) // only run on initial RENDER IF U ADD A []

  useEffect(() => { // can put as many useEffect as u want
    console.log("Use Effect CCalled")
    if (value > 1) {
      document.title = `New Messages(${value})`
    }
  },[value]);

  return <React.Fragment>
    <h2>Effect</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>Cick Me</button>
  </React.Fragment>
};

export default UseEffectBasics;
