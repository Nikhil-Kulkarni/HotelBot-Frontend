import React, { Component } from 'react';
import Textbox from './components/textbox/textbox';
import Button from './components/button/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <header className="header">
            concierge
          </header>
          <Textbox name="username" placeholder="Username" isSecure={false} />
          <Textbox name="password" placeholder="Password" isSecure={true} />
          <Button name="LOGIN" />
        </div>
      </div>
    );
  }
}

export default App;
