import * as React from 'react';

class MyList extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        );
    }
}

export default MyList;
