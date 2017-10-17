import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../actionCreators';
import Button from './Button';
import Field from './Field';
import { getRegistrationComplete, getRegistrationErrors, getRegistrationLoading } from '../selectors';


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
    if (this.props.isComplete) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <Field
          disabled={this.props.isLoading}
          errors={this.props.errors.email}
          label="Email"
          name="email"
          onChange={this.handleInputChange}
          placeholder="test@example.com"
          type="email"
        />

        <Field
          disabled={this.props.isLoading}
          errors={this.props.errors.password}
          id="password"
          label="Password"
          name="password"
          onChange={this.handleInputChange}
          type="password"
        />

        <Button
          disabled={this.props.isLoading}
          type="submit"
        >
          Register
        </Button>
      </form>
    );
  }
}

RegistrationForm.defaultProps = {
  errors: {},
  isComplete: false,
  isLoading: false,
};

RegistrationForm.propTypes = {
  errors: PropTypes.shape({
    email: PropTypes.arrayOf(PropTypes.string),
    non_field_errors: PropTypes.arrayOf(PropTypes.string),
    password: PropTypes.arrayOf(PropTypes.string),
  }),
  isComplete: PropTypes.bool,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};


export const mapStateToProps = state => ({
  errors: getRegistrationErrors(state),
  isComplete: getRegistrationComplete(state),
  isLoading: getRegistrationLoading(state),
});


export const mapDispatchToProps = dispatch => ({
  onSubmit: userData => dispatch(register(userData)),
});


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
