import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people,setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault() // prevent page from reloading (Javascript)
    if(firstName && email){
      console.log("Suubmit")
      // const person = {firstName:firstName,email:email} 
      const person = {id: new Date().getTime().toString(), firstName, email} // Feature in ES6: same as top line
      setPeople((people) => {
        return [...people,person]
      }) // SET OBJECT TO STATE => SAME AS => setPeople([...people,newPerson])
      setFirstName('')
      setEmail('')
    } else {
      console.log("Empty")
    }

  }

  return (<>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="firstName">
            Name :
        </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          >
          </input>
        </div>
        <div className='form-control'>
          <label htmlFor="email">
            Email :
        </label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></input>
        </div>
        <button type="submit">Add Person</button>
        {/* can also add on onClick to submit */}
      </form>
      {
        people.map((person)=>{
          const {id,firstName,email} = person
          return <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </article>
  </>);
};

export default ControlledInputs;
