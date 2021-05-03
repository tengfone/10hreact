import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)
  const reset = () => {
    setValue(0)
  }

  const advIncrease = () => {
    setTimeout(() => {
      // setValue(value+1)
      setValue((prevState)=>{
        return prevState+1 // ALWAYS NEED TO RETURN FROM FUNCTIONAL UPDATE
      }) // Why add in this function is because it gets CURRENT state value
    }, 2000 )
  }

  return <React.Fragment>
    <section style={{margin:'4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=>setValue(value-1)}>Decrease</button>
      <button className='btn' onClick={reset}>Reset</button>
      <button className='btn' onClick={()=>setValue(value+1)}>Increase</button>
    </section>
    <section style={{margin:'4rem 0'}}>
      <h2>Advance Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={advIncrease}>Increase Later</button>
    </section>
  </React.Fragment>
};

export default UseStateCounter;
