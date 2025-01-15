import * as React from 'react';
import PropTypes from 'prop-types';

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
MyList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MyList;
