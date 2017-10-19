import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Text } from './typography';


export const Wrapper = styled.div`
  background: rgba(255, 0, 0, .25);
  border: 1px solid red;
  border-radius: ${props => props.theme.borderRadius};
  margin: .5em 0;
  padding: .5em 1em;
`;


const MessageBox = ({ list }) => (
  <Wrapper>
    {list.length > 0 && (
      <ul>
        {list.map(item => <Text.li key={item} size={5}>{item}</Text.li>)}
      </ul>
    )}
  </Wrapper>
);

MessageBox.defaultProps = {
  list: [],
};

MessageBox.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};


export default MessageBox;
