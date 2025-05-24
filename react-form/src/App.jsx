import { useState } from "react"


function App() {

  // Single state handler

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // function firstNameHanlder(event) {
  //   setFirstName(event.target.value);
  //   console.log(firstName);
  // }

  // function lastNameHandler(event) {
  //   setLastName(event.target.value);
  //   console.log(lastName);
  // }

  // Multiple state handler

  const [formData, setFormData] = useState({firstName:'', lastName:'', email:''});

  console.log('FormData', formData);
  
  function changeHandler(event) {
    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <div className="text-center mt-2">
      <form action="">

        <input type="text" 
          placeholder="First name" 
          name="firstName"
          onChange={changeHandler} 
          value={formData.firstName}
          className="border p-1"
        />

        <br /> <br />

        <input type="text" 
          placeholder="Last name" 
          name="lastName"
          onChange={changeHandler}
          value={formData.lastName}
          className="border p-1"
        />

        <br /> <br />

        <input type="email" 
          placeholder="Email" 
          name="email" 
          onChange={changeHandler}
          value={formData.email}
          className="border p-1"
        />
        
      </form>
    </div>
  )
}

export default App
