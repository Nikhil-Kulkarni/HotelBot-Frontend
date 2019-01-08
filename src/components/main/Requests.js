import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import './Requests.css';

class Requests extends Component {

    static propTypes = {
        requests: PropTypes.array.isRequired
    }
    
    render() {
        const {
            requests,
        } = this.props;

        return (
            <div className='requestsContainer'>
                <ReactTable
                    data={requests}
                    columns={[
                        {
                            Header: "Room Number",
                            accessor: "room_number"
                        },
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                        {
                            Header: "Request",
                            accessor: "item"
                        }
                    ]}
                className="requestsTable -highlight"/>
            </div>
        );
    }

}

export default Requests;