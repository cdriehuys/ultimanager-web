import PropTypes from 'prop-types';
import React from 'react';


/**
 * Component for accepting text input.
 *
 * @param {string} props.name The name to give the input field.
 * @param {...object} [props.extraProps] Any additional props to pass to the input field.
 */
const Input = ({ ...extraProps }) => (
  <input {...extraProps} />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Input;
