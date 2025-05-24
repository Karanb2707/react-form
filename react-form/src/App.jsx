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

  const [formData, setFormData] = useState({firstName:'', lastName:'', email:'', comments:'', isVisible:true, mode:'', favCar:'' });
  
  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('Final Data', formData)
  }

  return (
    <div className="text-center mt-2">
      <form onSubmit={submitHandler}>

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
        
        <br /> <br />

        <textarea
          placeholder="Comments"
          name="comments"
          onChange={changeHandler}
          value={formData.comments}
          className="border p-1"
        />

        <br /> <br />

        <input 
          type="checkbox"
          name="isVisible"
          id="isVisible"
          onChange={changeHandler}
          value={formData.isVisible}
          checked={formData.isVisible}
        />

        <label htmlFor="isVisible" className="ml-1">Is Visible</label>

        <br /><br />

        <input 
          type="radio"
          name="mode"
          onChange={changeHandler}
          value='Online'
          id="onlineMode"
          checked={formData.mode === "Online"}
        />
        
        <label htmlFor="onlineMode" className="ml-1">Online Mode</label>

        <br />

        <input 
          type="radio"
          name="mode"
          onChange={changeHandler}
          value='Offline'
          id="offlineMode"
          checked={formData.mode === "Offline"}
        />
              
        <label htmlFor="offlineMode" className="ml-1">Offline Mode</label>

        <br /><br />

        <label htmlFor="favCar" className="m-2">Select Your Fav Car</label>

        <select
          name="favCar"
          onChange={changeHandler}
          id="favCar"
          value={formData.value}
          className="border rounded-sm"
        >
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="porsh">Porsh</option>
          <option value="lamborghini">Lamborghini</option>
        </select>

        <br /><br />

        <button className="py-1 px-2 rounded-md bg-red-600 text-white ring hover:ring-red-950">
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
