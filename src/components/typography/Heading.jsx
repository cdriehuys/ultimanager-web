import Text from './Text';


const Heading = Text.withComponent('h1').extend`
  font-family: ${props => props.theme.fonts.families.headings};
  font-weight: normal;
  margin: 0;
  padding: 0;
`;

Heading.h1 = Heading.withComponent('h1');
Heading.h1.defaultProps = {
  size: 1,
};

Heading.h2 = Heading.withComponent('h2');
Heading.h2.defaultProps = {
  size: 2,
};

Heading.h3 = Heading.withComponent('h3');
Heading.h3.defaultProps = {
  size: 3,
};

Heading.h4 = Heading.withComponent('h4');
Heading.h4.defaultProps = {
  size: 4,
};

Heading.h5 = Heading.withComponent('h5');
Heading.h5.defaultProps = {
  size: 5,
};

Heading.h6 = Heading.withComponent('h6');
Heading.h6.defaultProps = {
  size: 6,
};


export default Heading;
