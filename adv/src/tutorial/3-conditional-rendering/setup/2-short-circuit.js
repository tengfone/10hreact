import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('')
  const [isError,setIsError] = useState(false)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1>
    <h1>{text || 'john'}</h1>
    {text && <h1>Hello Truee</h1>}
    {!text && <h1>Hello False</h1>}
    <button className='btn' onClick={()=> setIsError(!isError)}>Toggle Error</button>
    {isError && <h1>ERROR TRIGGERED...</h1>} 
    {isError ? (<p>isTrue</p>) : (<p>isFalse</p>)}
  </>;
};

export default ShortCircuit;
