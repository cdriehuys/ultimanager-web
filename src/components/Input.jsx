import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


export const StyledInput = styled.input`
  border: 1px solid #e2e2e2;
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
 * @param {...object} [props.extraProps] Any additional props to pass to the input field.
 */
const Input = ({ name, ...extraProps }) => (
  <StyledInput name={name} {...extraProps} />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Input;
