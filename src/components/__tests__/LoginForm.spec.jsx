import { shallow } from 'enzyme';
import React from 'react';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login } from '../../actionCreators';
import rootReducer from '../../reducers';

import { LoginForm, mapDispatchToProps } from '../LoginForm';


jest.mock('../../services/UltimanagerAPI');


const middlewares = [thunk];
const mockStore = createStore(middlewares);


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
  it('should initially have empty strings for email and password', () => {
    const { wrapper } = setup();

    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
  });

  it('should call onSubmit with a email and password when submitted', () => {
    const credentials = {
      email: 'test@example.com',
      password: 'password',
    };

    const { props, wrapper } = setup();
    wrapper.instance().state = credentials;

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(props.onSubmit).toHaveBeenCalledWith(credentials.email, credentials.password);
  });

  describe('change handlers', () => {
    it('should update the email in state on a keypress', () => {
      const { wrapper } = setup();
      const emailWrapper = wrapper.find('#email');

      const newemail = 'email';

      emailWrapper.simulate('change', { target: { value: newemail } });

      expect(wrapper.state('email')).toEqual(newemail);
    });

    it('should update the password in state on a keypress', () => {
      const { wrapper } = setup();
      const passwordWrapper = wrapper.find('#password');

      const newPassword = 'password';

      passwordWrapper.simulate('change', { target: { value: newPassword } });

      expect(wrapper.state('password')).toEqual(newPassword);
    });
  });

  describe('Redux Connections', () => {
    describe('mapDispatchToProps', () => {
      it('should provide an onSubmit function to dispatch the login attempt', () => {
        const email = 'test@example.com';
        const password = 'password';

        const store = mockStore(rootReducer());
        const expectedStore = mockStore(rootReducer());

        const props = mapDispatchToProps(store.dispatch);

        return props.onSubmit(email, password)
          .then(() => expectedStore.dispatch(login(email, password)))
          .then(() => {
            expect(store.getActions()).toEqual(expectedStore.getActions());
          });
      });
    });
  });
});
