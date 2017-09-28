import { shallow } from 'enzyme';
import React from 'react';

import LoginForm from '../LoginForm';


const setup = () => {
  const props = {
    onSubmit: jest.fn(),
  };
  const wrapper = shallow(<LoginForm {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('LoginForm', () => {
  it('should initially have empty strings for username and password', () => {
    const { wrapper } = setup();

    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('username')).toEqual('');
  });

  it('should call onSubmit with a username and password when submitted', () => {
    const credentials = {
      username: 'username',
      password: 'password',
    };

    const { props, wrapper } = setup();
    wrapper.instance().state = credentials;

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(props.onSubmit).toHaveBeenCalledWith(credentials.username, credentials.password);
  });

  describe('change handlers', () => {
    it('should update the password in state on a keypress', () => {
      const { wrapper } = setup();
      const passwordWrapper = wrapper.find('#password');

      const newPassword = 'password';

      passwordWrapper.simulate('change', { target: { value: newPassword } });

      expect(wrapper.state('password')).toEqual(newPassword);
    });

    it('should update the username in state on a keypress', () => {
      const { wrapper } = setup();
      const usernameWrapper = wrapper.find('#username');

      const newUsername = 'username';

      usernameWrapper.simulate('change', { target: { value: newUsername } });

      expect(wrapper.state('username')).toEqual(newUsername);
    });
  });
});
