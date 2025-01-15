// 2. Create a react pure functional component that will take a email address as an input andd print wheather it is a valid email address or not.

import { useState } from 'react'
const EX_2 = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const ValidateEmail = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(email.match(emailPattern)) {
            setIsValid("Valid Email Address");
        }else {
            setIsValid("Invalid Email Address");
        }
    }

  return (
    <div>
        <div>
            <h2>Enter your Email : </h2>
            <input type="email" placeholder="Enter your Email" value={email} onChange={handleChange}/>

            <button onClick={ValidateEmail} className=' border bg-slate-600 px-6 py-2 '>Validate</button>

            <h3>{isValid}</h3>
        </div>
    </div>
  )
}

export default EX_2