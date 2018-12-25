import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './textbox.css';

export default class Textbox extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        isSecure: PropTypes.bool.isRequired,
    };

    componentWillMount() {

    }

    render() {
        const {
            name,
            placeholder,
            isSecure
        } = this.props;

        if (isSecure) {
            return (
                <div className="container">
                    <input
                        className="textbox"
                        name={name}
                        placeholder={placeholder}
                        type="password"
                    />
                </div>
            );
        }

        return (
            <div className="container">
                <input
                    className="textbox"
                    name={name}
                    placeholder={placeholder}
                />
            </div>
        );
    }

}