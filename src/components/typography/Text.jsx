import PropTypes from 'prop-types';
import styled from 'styled-components';


const Text = styled.span`
  font-family: ${props => props.theme.fonts.families.body};
  font-size: ${props => props.theme.fonts.sizes[props.size]};
  line-height: ${props => props.theme.fonts.lineHeight};
  margin: 0;
  padding: 0;
  text-align: ${props => props.align};
`;

Text.defaultProps = {
  align: 'left',
  size: 4,
};

Text.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};


// Allow text to be used with different components.
Text.li = Text.withComponent('li');
Text.p = Text.withComponent('p');


export default Text;
