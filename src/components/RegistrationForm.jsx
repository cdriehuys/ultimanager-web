import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { register } from '../actionCreators';
import { getRegistrationErrors } from '../selectors';


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
        <ul>
          {this.props.errors.email && this.props.errors.email.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          onChange={this.handleInputChange}
          type="password"
        />
        <ul>
          {this.props.errors.password && this.props.errors.password.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>

        <button type="submit">Register</button>
      </form>
    );
  }
}

RegistrationForm.defaultProps = {
  errors: {},
};

RegistrationForm.propTypes = {
  errors: PropTypes.shape({
    email: PropTypes.arrayOf(PropTypes.string),
    non_field_erros: PropTypes.arrayOf(PropTypes.string),
    password: PropTypes.arrayOf(PropTypes.string),
  }),
  onSubmit: PropTypes.func.isRequired,
};


export const mapStateToProps = state => ({
  errors: getRegistrationErrors(state),
});


export const mapDispatchToProps = dispatch => ({
  onSubmit: userData => dispatch(register(userData)),
});


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
