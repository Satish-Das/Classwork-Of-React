import * as react from 'react';

class StateExample extends react.Component {
    state = {
        first: true,
        second: false,
        clr: 'red',
        text: 'Hello World'
    }

    constructor(){
        super();
        setTimeout(() => {
            this.setState({first: false, second: true, clr: 'blue', text: 'Hello, CED Devision'})
        }, 3000);

        setTimeout(() => {
            this.setState({first: true, second: true, clr: 'green', text: 'Hello, 6CED Devision'})
        }, 5000);
    
    }

    render() {
        const { first, second, clr, text } = this.state;

        return (
            <div>
                <button disabled={first}>Button 1 </button>
                <button disabled={second}>Button 2 </button>
                <label style={{color: clr}}>{text}</label>
            </div>
        )
    }
}

export default StateExample;