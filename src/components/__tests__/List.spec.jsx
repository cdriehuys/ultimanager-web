import { shallow } from 'enzyme';
import React from 'react';

import { Text } from '../typography';

import List from '../List';


const setup = ({ items = ['foo', 'bar', 'baz'], ...rest } = {}) => {
  const props = {
    ...rest,
    items,
  };
  const wrapper = shallow(<List {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('List Component', () => {
  it('should render the provided items', () => {
    const { props, wrapper } = setup();
    const { items } = props;

    items.forEach((item) => {
      const itemWrapper = wrapper.findWhere(n => n.key() === item);

      expect(itemWrapper.children().text()).toBe(item);
    });
  });

  it('should default to rendering the items at their default size', () => {
    const { wrapper } = setup();

    wrapper.find(Text.li).forEach((node) => {
      expect(node.prop('size')).toBe(Text.defaultProps.size);
    });
  });

  it('should render the items at the size provided', () => {
    const size = 5;
    const { wrapper } = setup({ size });

    wrapper.find(Text.li).forEach((node) => {
      expect(node.prop('size')).toBe(size);
    });
  });
});
