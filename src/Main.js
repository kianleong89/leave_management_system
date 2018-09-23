import React, { Component } from 'react';
import './Main.css';
import Navigate from './Navigate';
import Home from './Home';
import Request from './Request';
import Approval from './Approval';

class Main extends Component {
  state = {
    navigate: ""
  }

  pageNavigate = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    console.log("Now is navigate to " + this.state.navigate);
  }

  render() {
    if (this.state.navigate === "" || this.state.navigate === "Home") {
      return (
        <div className="Home">
          <Navigate className="Navigate" pageNavigate={this.pageNavigate} />
          <Home />
        </div>
      );
    }

    if (this.state.navigate === "Leave") {
      return (
        <div className="leave_request">
          <Navigate className="Navigate" pageNavigate={this.pageNavigate} />
          <Request />
        </div>
      );
    }

    if (this.state.navigate === "Admin") {
      return (
        <div className="leave_approval">
          <Navigate className="Navigate" pageNavigate={this.pageNavigate} />
          <Approval />
        </div>
      );
    }
  }
}

export default Main;