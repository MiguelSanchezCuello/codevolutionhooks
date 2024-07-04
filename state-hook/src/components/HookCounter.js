import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0) 
    // initial value of the state variable count which is 0.
    // this deconstruction creates a variable for the state and a method to set the value of tha variable
    // so count is the variable and setCount is the method that changes the variable value.
    // it can be any names but for convention we should make sense with the names.. something, setSomthing


  
    return (
    <div>
      <button onClick={ () => setCount(count + 1)}> Count {count}</button>
    </div>
  )
}

export default HookCounter
