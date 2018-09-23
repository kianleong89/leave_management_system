import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Main from './Main';
import Header from './Header';

class App extends Component {
  state = {
    acc_found: ''
  }

  handleLogin = character => {
    //Check database to verify account.

    // If account not in database. Then, set account found to false
    this.setState({acc_found: false});

    // If account verified. Then, set account found to true
    // testing with below account:
    
    // normal account
    //------------------
    //   user:user
    //   password: 1234

    // admin account
    //------------------
    //   user:admin
    //   password: 1234
    //if (this.state.username === "user" && this.state.password === "1234") {
      this.setState({ acc_found: true });
    //}

    //if (this.state.username === "admin" && this.state.password === "1234") {
    //  this.setState({ acc_found: true });
    //}
  }

  render() {
    // this screen show when user first access to page
    if (this.state.acc_found === "") {
      return (
        <div className="App">
          <Header className="header" page="login" />
          <Login className="Login" handleLogin={this.handleLogin}/>
        </div>
      );
    }

    // This screen show when user account found in database.
    if (this.state.acc_found === true) {
      return (
        <div className="App">
          <Header className="header" page="main" />
          <Main className="Main" username={this.state.username}/>
        </div>
      );
    }

    // This screen show when user account not found in database. 
    // This might need to add code to prompt error message
    if (this.state.acc_found === false) {
      return (
        <div className="App">
          <Header className="header" page="login" />
          <Login className="Login" handleLogin={this.handleLogin}/>
        </div>
      );
    }
  }
}

export default App;
