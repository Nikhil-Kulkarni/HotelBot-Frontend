import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topbar from '../topbar/Topbar';
import Requests from './Requests';
import './Main.css';

class Main extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        hotelName: PropTypes.string.isRequired,
        requests: PropTypes.array.isRequired,
    }

    render() {
        const {
            hotelName,
            requests
        } = this.props;

        return (
            <div className='mainContent'>
                <Topbar />
                <div className='mainContainer'>
                    <div className='circle' />
                    <p className='hotelName'>{hotelName}</p>
                </div>
                <div className='tabs'>
                    <div className='requestsTab'>
                        <p className='requestsText'>Requests</p>
                        <p className='numberOfRequestsText'>{requests.length}</p>
                    </div>
                </div>
                <Requests requests={requests} />
            </div>
        );
    }

}

export default Main;