import { shallow } from 'enzyme';
import React from 'react';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { register } from '../../actionCreators';
import rootReducer from '../../reducers';

import { RegistrationForm, mapDispatchToProps } from '../RegistrationForm';


jest.mock('../../services/UltimanagerAPI');


const middlewares = [thunk];
const mockStore = createStore(middlewares);


const setup = () => {
  const props = {
    onSubmit: jest.fn(),
  };
  const wrapper = shallow(<RegistrationForm {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('RegistrationForm', () => {
  it('should have an initial empty state', () => {
    const { wrapper } = setup();

    expect(wrapper.state('email')).toBe('');
    expect(wrapper.state('password')).toBe('');
  });

  it('should call its onSubmit prop when submitted', () => {
    const userData = { email: 'test@example.com', password: 'password' };
    const { props, wrapper } = setup();
    wrapper.instance().state = userData;

    const mockEvent = { preventDefault: jest.fn() };

    wrapper.simulate('submit', mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(props.onSubmit).toHaveBeenCalledWith(userData);
  });

  describe('input handlers', () => {
    it('should have a handler to update email state', () => {
      const { wrapper } = setup();
      const emailWrapper = wrapper.find('input[name="email"]');

      const newEmail = 'test@example.com';

      emailWrapper.simulate('change', {
        target: {
          name: 'email',
          value: newEmail,
        },
      });

      expect(wrapper.state('email')).toBe(newEmail);
    });

    it('should have a handler to update password state', () => {
      const { wrapper } = setup();
      const passwordWrapper = wrapper.find('input[name="password"]');

      const newPassword = 'password';

      passwordWrapper.simulate('change', {
        target: {
          name: 'password',
          value: newPassword,
        },
      });

      expect(wrapper.state('password')).toBe(newPassword);
    });
  });

  describe('redux connections', () => {
    it('should pass props that dispatch actions', () => {
      const userData = { email: 'test@example.com', password: 'password' };

      const store = mockStore(rootReducer());
      const expectedStore = mockStore(rootReducer());

      const props = mapDispatchToProps(store.dispatch);

      return props.onSubmit(userData)
        .then(() => expectedStore.dispatch(register(userData)))
        .then(() => {
          expect(store.getActions()).toEqual(expectedStore.getActions());
        });
    });
  });
});
