import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Text } from './typography';


export const ListWrapper = styled.ul`
  list-style-position: inside;
  list-style-type: disc;
`;


/**
 * Render an unordered list of strings.
 *
 * @param {string[]} props.items A list of strings to render.
 * @param {number} [props.size] The size to render the list items at.
 */
const List = ({ items, size }) => (
  <ListWrapper>
    {items.map(item => (
      <Text.li key={item} size={size}>{item}</Text.li>
    ))}
  </ListWrapper>
);

List.defaultProps = {
  size: undefined,
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number,
};


export default List;
