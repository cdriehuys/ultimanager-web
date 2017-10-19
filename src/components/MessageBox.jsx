import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import List from './List';


export const Wrapper = styled.div`
  background: rgba(255, 0, 0, .25);
  border: 1px solid red;
  border-radius: ${props => props.theme.borderRadius};
  margin: .5em 0;
  padding: .5em 1em;
`;


/**
 * A box to display a message for the user.
 *
 * The message should be composed of a list of strings.
 *
 * @param {string[]} [props.list] A list of messages to render. Defaults to an empty list.
 */
const MessageBox = ({ list }) => (
  <Wrapper>
    {list.length > 0 && <List items={list} size={5} />}
  </Wrapper>
);

MessageBox.defaultProps = {
  list: [],
};

MessageBox.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};


export default MessageBox;
