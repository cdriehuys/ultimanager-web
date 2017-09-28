import PropTypes from 'prop-types';
import React from 'react';


/**
 * A form for logging in with a username and password.
 *
 * When the form is submitted, the 'onSubmit' prop is called with the user's
 * username and password.
 */
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      username: '',
    };

    // Bind event handlers to maintain correct context
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  /**
   * Update the component's password state to match the input field.
   */
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  /**
   * Handle submitting the form.
   *
   * This calls the 'onSubmit' prop with the provided username and password.
   */
  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.username, this.state.password);
  }

  /**
   * Update the component's username state to match the input field.
   */
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  /**
   * Render the form.
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          onChange={this.handleUsernameChange}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          onChange={this.handlePasswordChange}
          type="password"
        />
        <br />

        <button type="submit">Log In</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default LoginForm;
