import { Text } from './typography';


const Button = Text.withComponent('button').extend`
  background: ${props => props.theme.colors.accentGray};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  padding: .5em 1em;

  &:hover {
    background: #bbb;
  }
`;


export default Button;
