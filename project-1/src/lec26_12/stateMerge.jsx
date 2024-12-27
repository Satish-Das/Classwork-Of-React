import * as React from 'react';

class StateMerge extends React.Component {
    state = {
        first: "loading..",
        second: "loading..",
        third: "loading..",
        fourth: "loading..",
        fifth: "loading..",
        doneMsg: "Loading Completed"
    }

    constructor(){
        super();
        setTimeout(() => {
            this.setState({
                first: "First Loaded"
            })
        }, 2000)

        setTimeout(() => {
            this.setState({
                second: "Second Loaded"
            })
        }, 4000)

        setTimeout(() => {
            this.setState({
                third: "Third Loaded"
            })
        }, 6000)

        setTimeout(() => {
            this.setState((state) => ({...state, fourth: state.doneMsg, fifth: state.doneMsg}))
        }, 8000)

        
    }
    render(){
        return (
            <ul>
            {
                Object.keys(this.state)
                .filter((key) => (key !== "doneMsg"))
                .map((key) => (
                    <li key={key}>
                        <strong>{key} : </strong>
                        {this.state[key]}
                    </li>
                ))
            }
            </ul>
        )
    }
}

export default StateMerge;