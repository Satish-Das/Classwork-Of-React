// 4. Create a react pure functional component that will take text input and print total number of characters.
import { useState } from 'react';
const EX_4 = () => {

const [count, setCount] = useState(0);



  return (
    <div>
        <h2>Enter your Text : </h2>
        <input type="text" placeholder="Enter your Text" onChange={(e) => setCount(e.target.value.length)}/>
        <h2>{count}</h2>
    </div>
  )
}

export default EX_4