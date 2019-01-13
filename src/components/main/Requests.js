import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import './Requests.css';

class Requests extends Component {

    static propTypes = {
        requests: PropTypes.array.isRequired
    }
    
    render() {
        const {
            requests,
        } = this.props;

        const columns = [
            {
                header: "Room Number",
                accessor: "room_number"
            },
            {
                header: "Name",
                accessor: "name"
            },
            {
                multiComponent: true,
                header: "request",
                accessors: ["amount", "item"]
            }
        ];

        return (
            <div className='requestsContainer'>
                <Table data={requests} columns={columns}/>
            </div>
        );
    }

}

export default Requests;