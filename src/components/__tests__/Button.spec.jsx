import { shallow } from 'enzyme';
import React from 'react';

import defaultTheme from '../../styles/theme';

import Button from '../Button';


const setup = ({ theme = defaultTheme } = {}) => {
  const props = {
    theme,
  };
  const wrapper = shallow(<Button {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('Button Component', () => {
  it('should pull some styles from the theme', () => {
    const { props, wrapper } = setup();
    const { theme } = props;

    expect(wrapper).toHaveStyleRule('background', theme.colors.accentGray);
    expect(wrapper).toHaveStyleRule('border-radius', theme.borderRadius);
  });
});
