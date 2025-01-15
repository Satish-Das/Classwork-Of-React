// 1. Create a react pure functional component that will take 2 numbers and print addition, subtraction, multiplication and division of those numbers.
import { useState } from "react";
const Ex_1 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function handleNum1Change(e) {
    setNum1(e.target.value);
    console.log(num1);
  }

  function handleNum2Change(e) {
    setNum2(e.target.value);
    console.log(num2);
  }

  return (
    <div>
      <div>
        Enter first Number :
        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={handleNum1Change}
        />
        <br />
        Enter second Number :
        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={handleNum2Change}
        />
      </div>

      <br />
      <br />

      <div>
        {/* // Print addition, subtraction, multiplication and division of those numbers. */}

        <h1> Addition : {isNaN(parseInt(num1) + parseInt(num2)) ? "0" : parseInt(num1) + parseInt(num2)} </h1>
        <h1> Subtraction : {isNaN(parseInt(num1) - parseInt(num2)) ? "0" : parseInt(num1) - parseInt(num2)} </h1>
        <h1> Multiplication : {isNaN(parseInt(num1) * parseInt(num2)) ? "0" : parseInt(num1) * parseInt(num2)} </h1>
        <h1> Division : {isNaN(parseInt(num1) / parseInt(num2)) ? "0" : parseInt(num1) / parseInt(num2)} </h1>

      </div>
    </div>
  );
};

export default Ex_1;
