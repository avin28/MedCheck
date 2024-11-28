import React, { useState } from 'react';

function UserInput() {
  // Declare a state variable to store the user's input
  const [userText, setUserText] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setUserText(event.target.value);
  };

  // Handle form submission (for example, logging the input)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from reloading
    alert(`You entered: ${userText}`); // Display the entered text in an alert
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div className='flex p-2 space-x-1'>
        <input
          type="text"
          id="userText"
          value={userText}            // Bind the input value to state
          onChange={handleChange}     // Update state when user types
          placeholder="Type..."
        />
        <button className="bg-blue text-white p-2 rounded-md">Check</button>
        </div>
      </form>


    </div>
  );
}

export default UserInput;
