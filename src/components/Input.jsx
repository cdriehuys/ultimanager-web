import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


export const StyledInput = styled.input`
  border: 1px solid ${props => (props.error ? props.theme.colors.error : props.theme.colors.accentGray)};
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  font-family: ${props => props.theme.fonts.families.body};
  line-height: ${props => props.theme.fonts.lineHeight};
  margin: 0;
  padding: .25em;
  width: 100%;

  &:focus {
    border-color: #b7eaff;
    outline: none;
  }
`;


/**
 * Component for accepting text input.
 *
 * @param {string} props.name The name to give the input field.
 * @param {boolean} [props.error] A boolean indicating if the input has an error.
 * @param {...object} [props.extraProps] Any additional props to pass to the input field.
 */
const Input = ({ name, ...extraProps }) => (
  <StyledInput name={name} {...extraProps} />
);

Input.defaultProps = {
  error: false,
};

Input.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
};


export default Input;
