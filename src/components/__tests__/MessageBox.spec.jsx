import { shallow } from 'enzyme';
import React from 'react';

import theme from '../../styles/theme';

import MessageBox, { Wrapper } from '../MessageBox';


const setup = ({ ...rest } = {}) => {
  const props = {
    ...rest,
  };
  const wrapper = shallow(<MessageBox {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('MessageBox Component', () => {
  describe('Wrapper', () => {
    it('should pull some styles from the theme', () => {
      const wrapper = shallow(<Wrapper theme={theme} />);

      expect(wrapper).toHaveStyleRule('border-radius', theme.borderRadius);
    });
  });

  describe('List Rendering', () => {
    it('should not render a list if the list is empty', () => {
      const { wrapper } = setup();

      expect(wrapper.find('ul')).toHaveLength(0);
    });

    it('should render a list of components if given', () => {
      const list = ['foo', 'bar', 'baz'];
      const { wrapper } = setup({ list });

      list.forEach((item) => {
        const itemWrapper = wrapper.findWhere(n => n.key() === item);

        expect(itemWrapper).toHaveLength(1);
        expect(itemWrapper.children().text()).toBe(item);
      });
    });
  });
});
