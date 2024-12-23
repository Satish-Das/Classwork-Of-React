import * as React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
    <div>
        Hello World
        <h1>React h1</h1>
        <h2>React h1</h2>
        <h3>React h1</h3>
        Full name :<input type=" text" /><br />
        Gender : Male <input type="radio" name="gender" value="male" /> Female <input type="radio" name="gender" id="" /><br />
        Check Box <input type="checkbox" name="" id="" /><br />
        Select Color <input type="color" name="" id="" /><br />
        <input type="button" value="Button" /><br />
    </div>
    )
  }
}

export default MyComponent;