import { useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  // // console.log(formData);
  // const [formdata, setFormData] = useState({
  //   firstName: "sahul",
  // });
  // function changeHandler(event){
  //  setFirstName(event.target.value);
  //  console.log(setFormData);
     
  // }

  // // const handleSubmit = (event) => {
  // //   // event.preventDefault();
  // //   // alert(`The name you entered was: ${firstName}`);

  // // }

  // function handleSubmit (event){
  //   event.preventDefault();
    
  //   console.log("finally printing data....");
  //   console.log(formdata);
    
  // }



  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  const [text, setText] = useState("I am good programmar");

  function textHandler(e){
    setText(e.target.value)
  }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input 
          type="text"
          placeholder='Enter your first name'
          name='firstName'
          id='firstName'
          value={FormData.firstName}
          onChange={changeHandler}
          className='outline' />
          
        </label>

        <input type="submit" />
      </form> */}


<form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />

        <textarea name="Sometext" id="sometext" value={text} onChange={textHandler}></textarea>
    </form>
    </div>
  )
}

export default App
