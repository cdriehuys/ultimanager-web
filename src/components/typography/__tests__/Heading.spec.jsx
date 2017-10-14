import { shallow } from 'enzyme';
import React from 'react';

import defaultTheme from '../../../styles/theme';

import Heading from '../Heading';


const setup = ({ theme = defaultTheme } = {}) => {
  const props = {
    theme,
  };
  const wrapper = shallow(<Heading {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('Heading Component', () => {
  it('should pull some styles from the theme', () => {
    const { props, wrapper } = setup();
    const { theme } = props;

    expect(wrapper).toHaveStyleRule(
      'font-family',
      theme.fonts.families.headings.replace(/,\s/, ','));
  });
});
