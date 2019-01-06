import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Textbox from '../textbox/textbox';
import './App.css';

class App extends Component {

    static propTypes = {
        loginHotel: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.login = this.login.bind(this);
    }

    login(event) {
        event.preventDefault();
        this.props.loginHotel(event.target.hotelId.value);
    }

    render() {
        return (
            <div className="App">
                <div className="content">
                    <header className="header">
                        concierge
                    </header>
                    <form onSubmit={this.login.bind(this)}>
                        <Textbox name="hotelId" placeholder="Hotel ID" isSecure={false} />
                        <button className='loginButton'>
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;