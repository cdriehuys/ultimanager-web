import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import { Text } from './typography';


export const FieldWrapper = styled.div`
  margin: 1em 0;
`;


export const StyledLabel = Text.withComponent('label').extend`
  display: block;
  font-weight: bold;
`;


/**
 * A wrapper around a form input and label.
 *
 * @param {string} props.label A descriptive label for the field.
 * @param {string} props.name The input field's name.
 * @param {string[]} [props.errors] A list of errors for the field.
 * @param {string} [props.id] The ID to give the input. Defaults to the input's name.
 * @param {...object} [props.extraProps] Additional props to pass to the input component.
 */
const Field = ({ errors, id, label, name, ...extraProps }) => (
  <FieldWrapper>
    <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
    <Input id={id || name} name={name} {...extraProps} />
    {errors.length > 0 && (
      <ul>
        {errors.map(error => (
          <li key={error}><Text size={5}>{error}</Text></li>
        ))}
      </ul>
    )}
  </FieldWrapper>
);

Field.defaultProps = {
  errors: [],
  id: '',
};

Field.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


export default Field;
