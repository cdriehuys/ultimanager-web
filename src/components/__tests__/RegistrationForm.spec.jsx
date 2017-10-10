import { shallow } from 'enzyme';
import React from 'react';
import { createStore } from 'redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { register } from '../../actionCreators';
import { completeRegistration, completeRegistrationWithErrors } from '../../actionCreators/registration';
import rootReducer from '../../reducers';
import { getRegistrationComplete, getRegistrationErrors } from '../../selectors';

import { RegistrationForm, mapDispatchToProps, mapStateToProps } from '../RegistrationForm';


jest.mock('../../services/UltimanagerAPI');


const middlewares = [thunk];
const mockStore = createMockStore(middlewares);


const setup = ({ errors = {}, isComplete = false } = {}) => {
  const props = {
    onSubmit: jest.fn(),
    errors,
    isComplete,
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

  it('should render any provided errors', () => {
    const emailError = ['Invalid email.'];
    const passwordError = ['Invalid password.'];
    const errors = { email: emailError, password: passwordError };

    const { wrapper } = setup({ errors });

    const findErrors = (errorList) => {
      errorList.forEach((error) => {
        const errorWrapper = wrapper.findWhere(n => n.key() === error);

        expect(errorWrapper).toHaveLength(1);
        expect(errorWrapper.text()).toBe(error);
      });
    };

    findErrors(emailError);
    findErrors(passwordError);
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

  it('should redirect to the dashboard if complete', () => {
    const { wrapper } = setup({ isComplete: true });
    const redirect = wrapper.find('Redirect');

    expect(redirect).toHaveLength(1);
    expect(redirect.prop('to')).toBe('/');
  });

  describe('redux connections', () => {
    describe('mapStateToProps', () => {
      it('should pass any form errors from state as props', () => {
        const errors = { email: ['Invalid email.'] };

        const store = createStore(rootReducer);
        store.dispatch(completeRegistrationWithErrors(errors));

        const state = store.getState();
        const expected = getRegistrationErrors(state);

        expect(mapStateToProps(state).errors).toEqual(expected);
      });

      it('should pass a prop indicating if the form is complete', () => {
        const store = createStore(rootReducer);
        store.dispatch(completeRegistration({}));

        const state = store.getState();
        const expected = getRegistrationComplete(state);

        expect(mapStateToProps(state).isComplete).toBe(expected);
      });
    });

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
