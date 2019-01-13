import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TableHeader.css';

class TableHeader extends Component {

    static propTypes = {
        columns: PropTypes.array.isRequired
    }

    render() {
        const {
            columns
        } = this.props;

        return (
            <div className="tableHeaderContainer">
                <div className="checkBoxCont">
                    <label className="checkboxContainer">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="roomNumberHeader">Room Number</div>
                <div className="nameHeader">Name</div>
                <div className="requestHeader">Request</div>
            </div>
        );
    }

}

export default TableHeader;