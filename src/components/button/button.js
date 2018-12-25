import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div>
                <button className="loginButton">
                    LOGIN
                </button>
            </div>
        );
    }

}