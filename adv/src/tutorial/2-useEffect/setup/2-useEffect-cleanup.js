import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth)
  console.log(size)

  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize',checkSize)
    return() => {
      console.log("cleanUp")
      window.removeEventListener('resize',checkSize)
    } // return exit
  })

  return <React.Fragment>
    <h1>Window</h1>
    <h2>{size} pixels</h2>
  </React.Fragment>
};

export default UseEffectCleanup;
