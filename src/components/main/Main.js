import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        hotelName: PropTypes.string.isRequired,
    }

    render() {
        const {
            hotelName
        } = this.props;

        return (
            <div>
                <h3>{hotelName}</h3>
            </div>
        );
    }

}

export default Main;