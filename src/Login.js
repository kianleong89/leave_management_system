import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      username: '',
      password: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
        [name] : value
    });
  }
  
  submitLogin = () => {
    console.log("The login profile is :" + this.state.username);
    console.log("The password is :" + this.state.password);
    this.props.handleLogin(this.props.state);
    this.setState(this.initialState);
  }
  
  render() {
    const { username, password } = this.state;

    return (
      <form>
        <label>Username</label>
        <input
          type="text" 
          name="username" 
          value={username}
          onChange={this.handleChange} />
        <br/> 
        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          value={password}
          onChange={this.handleChange} />
        <br/>
        <input 
          type="button" 
          value="Login" 
          onClick={this.submitLogin} />
      </form>
    );
  }
}

export default Login;