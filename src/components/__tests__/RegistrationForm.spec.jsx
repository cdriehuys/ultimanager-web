import { shallow } from 'enzyme';
import React from 'react';
import { createStore } from 'redux';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { register } from '../../actionCreators';
import { completeRegistration, completeRegistrationWithErrors, sendRegistration } from '../../actionCreators/registration';
import rootReducer from '../../reducers';
import { getRegistrationComplete, getRegistrationErrors, getRegistrationLoading } from '../../selectors';

import { RegistrationForm, mapDispatchToProps, mapStateToProps } from '../RegistrationForm';


jest.mock('../../services/UltimanagerAPI');


const middlewares = [thunk];
const mockStore = createMockStore(middlewares);


const setup = ({ errors = {}, isComplete = false, isLoading = false } = {}) => {
  const props = {
    onSubmit: jest.fn(),
    errors,
    isComplete,
    isLoading,
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

  it('should render an email and password field', () => {
    const { wrapper } = setup();
    const email = wrapper.find('Field[name="email"]');
    const password = wrapper.find('Field[name="password"]');

    expect(email.prop('onChange')).toBe(wrapper.instance().handleInputChange);
    expect(email.prop('type')).toBe('email');

    expect(password.prop('onChange')).toBe(wrapper.instance().handleInputChange);
    expect(password.prop('type')).toBe('password');
  });

  it('should render any provided errors', () => {
    const emailError = ['Invalid email.'];
    const passwordError = ['Invalid password.'];
    const errors = { email: emailError, password: passwordError };

    const { wrapper } = setup({ errors });

    Object.keys(errors).forEach((field) => {
      const fieldComponent = wrapper.find(`Field[name="${field}"]`);

      expect(fieldComponent.prop('errors')).toEqual(errors[field]);
    });
  });

  it('should redirect to the dashboard if complete', () => {
    const { wrapper } = setup({ isComplete: true });
    const redirect = wrapper.find('Redirect');

    expect(redirect).toHaveLength(1);
    expect(redirect.prop('to')).toBe('/');
  });

  it('should disable inputs if isLoading is true', () => {
    const { wrapper } = setup({ isLoading: true });

    // All inputs should be disabled
    wrapper.find('Field').forEach((node) => {
      expect(node.prop('disabled')).toBe(true);
    });

    // Buttons should be disabled too
    wrapper.find('button').forEach((node) => {
      expect(node.prop('disabled')).toBe(true);
    });
  });

  describe('Event Handlers', () => {
    it('should update its state when an input changes', () => {
      const { wrapper } = setup();

      const mockChange = {
        target: {
          name: 'foo',
          value: 'bar',
        },
      };

      wrapper.instance().handleInputChange(mockChange);

      expect(wrapper.state(mockChange.target.name)).toBe(mockChange.target.value);
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
  });

  describe('Redux Connections', () => {
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

      it('should pass a prop indicating if the form is loading', () => {
        const store = createStore(rootReducer);
        store.dispatch(sendRegistration({}));

        const state = store.getState();
        const expected = getRegistrationLoading(state);

        expect(mapStateToProps(state).isLoading).toBe(expected);
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
