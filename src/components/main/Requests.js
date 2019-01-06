import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Requests extends Component {

    static propTypes = {
        requests: PropTypes.array.isRequired
    }
    
    render() {
        return (
            <div className='requestsContainer'>
                
            </div>
        );
    }

}

export default Requests;