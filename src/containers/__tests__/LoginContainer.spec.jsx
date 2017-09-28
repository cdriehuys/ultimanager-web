import { shallow } from 'enzyme';
import React from 'react';

import LoginContainer from '../LoginContainer';


const setup = () => {
  const wrapper = shallow(<LoginContainer />);

  return { wrapper };
};


describe('LoginContainer', () => {
  it('should render a login form', () => {
    const { wrapper } = setup();
    const form = wrapper.find('LoginForm');

    expect(form).toHaveLength(1);
    expect(form.prop('onSubmit')).toEqual(wrapper.instance().handleLogin);
  });
});
