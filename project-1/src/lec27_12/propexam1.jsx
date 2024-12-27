import * as React from 'react';
import MyButton from './propexam2.jsx';
import MyList from './propexam3.jsx';

class PropExample extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            text: "My Button",
            disabled: false,
            items: ['One', 'Apple', 'Two', 'Three'],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                disabled: false,
                text: "Hello world",
                items: ['Apple', 'Banana', 'Cherry', 'Date']
            });
        }, 2000);
    }

    render() {
        const { text, disabled, items } = this.state;

        return (
            <div>
                <MyButton text={text} disabled={disabled} />
                <MyList items={items} />
            </div>
        );
    }
}

export default PropExample;
