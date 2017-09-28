import React from 'react';

import LoginForm from '../components/LoginForm';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() { // eslint-disable-line class-methods-use-this
    console.log('Log in form submitted.');
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <LoginForm onSubmit={this.handleLogin} />
      </div>
    );
  }
}


export default LoginContainer;
