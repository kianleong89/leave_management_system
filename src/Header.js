import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

class Header extends Component {
  render() {
    if (this.props.page === "login") {
      return (
        <div className="App">
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
          </header>
        </div>
      );
    }

    if (this.props.page === "main") {
      return (
        <div className="App">
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
          </header>
        </div>
      );
    }
  }
}

export default Header;