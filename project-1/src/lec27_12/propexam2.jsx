import * as React from 'react';

class MyButton extends React.Component{
    render(){
        const {disabled, text} = this.props;
        return (
            <button
            className='border border-blue-500 bg-blue-500 text-white px-4 py-2 rounded'
            disabled={disabled}>{text}</button>
        )
    }
}

export default MyButton;