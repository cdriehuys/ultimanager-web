import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { register } from '../actionCreators';


export class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          onChange={this.handleInputChange}
          type="email"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          onChange={this.handleInputChange}
          type="password"
        />
        <br />

        <button type="submit">Register</button>
      </form>
    );
  }
}

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export const mapDispatchToProps = dispatch => ({
  onSubmit: userData => dispatch(register(userData)),
});


export default connect(null, mapDispatchToProps)(RegistrationForm);
