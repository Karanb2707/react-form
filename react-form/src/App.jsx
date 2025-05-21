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
  // 21 min

  return (
    <div className="text-center mt-2">
      <form action="">
        <input type="text" placeholder="First name" onChange={firstNameHanlder} className="border p-1"/>
        <br /> <br />
        <input type="text" placeholder="Last name" onChange={lastNameHandler}  className="border p-1"/>
      </form>
    </div>
  )
}

export default App
