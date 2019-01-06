import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired,
    };

    render() {
        const {
            name,
            action
        } = this.props;

        return (
            <div>
                <button className='loginButton' onClick={action}>
                    LOGIN
                </button>
            </div>
        );
    }

}