import { shallow } from 'enzyme';
import React from 'react';

import LoginForm from '../../components/LoginForm';

import LoginContainer from '../LoginContainer';


const setup = () => {
  const wrapper = shallow(<LoginContainer />);

  return { wrapper };
};


describe('LoginContainer', () => {
  it('should render a login form', () => {
    const { wrapper } = setup();

    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
});
