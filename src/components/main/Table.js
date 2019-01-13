import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import './Table.css';

class Table extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        columns: PropTypes.array.isRequired
    }

    render() {
        const {
            data,
            columns
        } = this.props;

        const numberOfRows = data.length;
        const numberOfColumns = columns.length;

        return (
            <div className="tableContainer">
                <TableHeader columns={columns} />
                <table className="mainTable">
                    <tbody>
                        {data.map((request, index) => 
                            <tr className="mainTableRow" key={index}>
                                <td className="checkBoxDiv">
                                    <label className="checkboxContainer">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>    
                                </td> 
                                <td className="actionsRow">
                                    <select>
                                        <option value="" disabled selected>Actions</option>
                                        <option value="complete">Complete</option>
                                    </select>
                                </td>
                                <td className="roomNumberRow">{request.room_number}</td>
                                <td className="nameRow">{request.name}</td>
                                <td className="itemRow">
                                    {request.amount != -1 ? <div className="amountDiv">{request.amount}</div> : <div></div>}
                                    <div className="itemDiv">{request.item.charAt(0).toUpperCase() + request.item.slice(1)}</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Table;