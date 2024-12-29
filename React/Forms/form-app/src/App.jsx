import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    condidates: false,
    offers: false,
    pushNotification: "",
  })

  const changeHandler = (event)=>{
    const {name, value, checked, type} = event.target;
    setFormData ( (prev) => ({
      ...prev,
      [name] : type === 'checkbox' ? checked : value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Submitted data...");
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <legend htmlFor='firstName'>First Naame: </legend>
        <br />
        <input 
        type="text"
        name='firstName'
        value={formData.firstName}
        id='firstName'
        onChange={changeHandler}
        placeholder='enter your first name'
         />

         <br />

         <legend htmlFor='lastName'>Last Name: </legend>
        <br />
        <input 
        type="text"
        name='lastName'
        value={formData.lastName}
        id='lastName'
        onChange={changeHandler}
        placeholder='enter your last name'
         />

         <br />

         <legend htmlFor='email'>Email: </legend>
        <br />
        <input 
        type="email"
        name='email'
        value={formData.email}
        id='email'
        onChange={changeHandler}
        placeholder='enter your email'
         />

         <br />

         <legend htmlFor='country'>Country</legend>
        <br />
        <select
        id='country'
        name='country'
        value={formData.country}
        onChange={changeHandler}
        >
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
        </select>

         <br />

         <legend htmlFor='streetAdd'></legend>
        <br />
        <input 
        type="text"
        name='streetAdd'
        value={formData.streetAddress}
        id='streetAdd'
        onChange={changeHandler}
        placeholder='enter your street address'
         />

         <br />

         <legend htmlFor='city'></legend>
        <br />
        <input 
        type="text"
        name='city'
        value={formData.city}
        id='city'
        onChange={changeHandler}
        placeholder='enter your city'
         />

         <br />

         <legend htmlFor='state'></legend>
        <br />
        <input 
        type="text"
        name='state'
        value={formData.state}
        id='state'
        onChange={changeHandler}
        placeholder='enter your state'
         />

         <br />

         <legend htmlFor='postalCode'>Postal Code</legend>
        <input 
        type="number"
        name='postalCode'
        value={formData.postalCode}
        id='postalCode'
        onChange={changeHandler}
        placeholder='enter your postal code'
         />

         <br />

         
      <fieldset>
        <legend>By Email</legend>
        <div className="flex flex-row">
          <input
          type="checkbox"
          id="comments"
          name="comments"
          checked={formData.comments}
          onChange={changeHandler}
          ></input>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Comments is something</p>
          </div>
        </div>   

        <div className="flex flex-row">
          <input
          type="checkbox"
          id="candidates"
          name="comments"
          checked={formData.candidates}
          onChange={changeHandler}
          ></input>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>candidates is something</p>
          </div>
        </div>   

        <div className="flex flex-row">
          <input
          type="checkbox"
          id="offers"
          name="comments"
          checked={formData.offers}
          onChange={changeHandler}
          ></input>
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Offers is something</p>
          </div>
        </div>   
      </fieldset>
      <br/>
      <br/>

      <fieldset>
        <legend>Push Notification</legend>
        <p>send this message</p>

        <input
        type="radio"
        id="pushEverything"
        name="pushNotification"
        value="Everything"
        onChange={changeHandler}
        ></input>
        <label htmlFor="pushEverything"> Push Everything</label><br/>

        <input
        type="radio"
        id="pushEmail"
        name="pushNotification"
        value="Same as Email"
        onChange={changeHandler}
        ></input>
        <label htmlFor="pushEmail"> Push as Email</label><br/>

        <input
        type="radio"
        id="pushNothing"
        name="pushNotification"
        value="No push Notification"
        onChange={changeHandler}
        ></input>
        <label htmlFor="pushNothing"> No push Notification</label>
      </fieldset>
      <br/>

      <button>submit</button>
      </form>

    </div>
  )
}

export default App
