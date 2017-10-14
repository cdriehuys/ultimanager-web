import { shallow } from 'enzyme';
import React from 'react';

import Field, { StyledLabel } from '../Field';


const setup = ({ label = 'Foo', name = 'foo', ...rest } = {}) => {
  const props = {
    ...rest,
    label,
    name,
  };
  const wrapper = shallow(<Field {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('Field Component', () => {
  it('should render a label', () => {
    const { props, wrapper } = setup();
    const label = wrapper.find(StyledLabel);

    expect(label.children().text()).toBe(props.label);
  });

  it('should render an Input', () => {
    const { props, wrapper } = setup();
    const input = wrapper.find('Input');

    expect(input.prop('name')).toBe(props.name);
  });

  it('should pass any extra props to the Input component', () => {
    const extraProps = { foo: 'bar', bar: 'baz' };
    const { wrapper } = setup(extraProps);
    const input = wrapper.find('Input');

    expect(input.props()).toMatchObject(extraProps);
  });

  it('should provide a default ID equivalent to the given name', () => {
    const { props, wrapper } = setup();
    const input = wrapper.find('Input');
    const label = wrapper.find(StyledLabel);

    expect(input.prop('id')).toBe(props.name);
    expect(label.prop('htmlFor')).toBe(props.name);
  });

  it('should accept an ID and use it for the label and input', () => {
    const id = 'custom-id';
    const { wrapper } = setup({ id });
    const input = wrapper.find('Input');
    const label = wrapper.find(StyledLabel);

    expect(input.prop('id')).toBe(id);
    expect(label.prop('htmlFor')).toBe(id);
  });

  describe('Error Rendering', () => {
    it('should not render an error list with no errors', () => {
      const { wrapper } = setup();
      const errorList = wrapper.find('ul');

      expect(errorList).toHaveLength(0);
    });

    it('should map each error to a list item', () => {
      const errors = ['Error 1', 'Error 2', 'Another error'];
      const { wrapper } = setup({ errors });
      const errorList = wrapper.find('ul');

      expect(errorList).toHaveLength(1);

      errors.forEach((error) => {
        const node = errorList.findWhere(n => n.key() === error);
        expect(node.children().children().text()).toBe(error);
      });
    });
  });
});
