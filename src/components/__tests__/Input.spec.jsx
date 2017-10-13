import { shallow } from 'enzyme';
import React from 'react';

import Input, { StyledInput } from '../Input';


const setup = ({ name = 'foo', ...rest } = {}) => {
  const props = {
    ...rest,
    name,
  };
  const wrapper = shallow(<Input {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('Input Component', () => {
  it('should render a standard text input', () => {
    const { props, wrapper } = setup();
    const input = wrapper.find(StyledInput);

    expect(input).toHaveLength(1);
    expect(input.prop('name')).toBe(props.name);
  });

  it('should render any additional props passed to it', () => {
    const extraProps = { foo: 'bar', bar: 'baz' };
    const { wrapper } = setup(extraProps);
    const input = wrapper.find(StyledInput);

    Object.keys(extraProps).forEach((key) => {
      expect(input.prop(key)).toBe(extraProps[key]);
    });
  });
});
