import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actionCreators';


/**
 * A form for logging in with a username and password.
 *
 * When the form is submitted, the 'onSubmit' prop is called with the user's
 * email and password.
 */
export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    // Bind event handlers to maintain correct context
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  /**
   * Update the component's email state to match the input field.
   */
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
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
   * This calls the 'onSubmit' prop with the provided email and password.
   */
  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.email, this.state.password);
  }

  /**
   * Render the form.
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          onChange={this.handleEmailChange}
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


export const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => dispatch(login(email, password)),
});


export default connect(null, mapDispatchToProps)(LoginForm);
