import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Text } from './typography';


export const ListWrapper = styled.ul`
  color: ${props => (props.error ? props.theme.colors.error : 'unset')};
  list-style-position: inside;
  list-style-type: disc;
  padding: 0 .5em;
`;


/**
 * Render an unordered list of strings.
 *
 * @param {string[]} props.items A list of strings to render.
 * @param {boolean} [props.error] A boolean indicating if this is a list of errors.
 * @param {number} [props.size] The size to render the list items at.
 */
const List = ({ error, items, size }) => (
  <ListWrapper error={error}>
    {items.map(item => (
      <Text.li key={item} size={size}>{item}</Text.li>
    ))}
  </ListWrapper>
);

List.defaultProps = {
  error: false,
  size: undefined,
};

List.propTypes = {
  error: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number,
};


export default List;
