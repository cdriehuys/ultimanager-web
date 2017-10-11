import { createStore } from 'redux';

import { completeRegistration, completeRegistrationWithErrors, sendRegistration } from '../../actionCreators/registration';
import rootReducer from '../../reducers';

import { getRegistrationComplete, getRegistrationErrors, getRegistrationLoading } from '../';


describe('getRegistrationComplete selector', () => {
  it('should return if the registration is complete', () => {
    const store = createStore(rootReducer);
    store.dispatch(completeRegistration({}));

    const state = store.getState();

    expect(getRegistrationComplete(state)).toBe(state.registration.isComplete);
  });
});


describe('getRegistrationErrors selector', () => {
  it('should return the registration errors stored in state', () => {
    const errors = { email: ['Invalid email address.'] };

    const store = createStore(rootReducer);
    store.dispatch(completeRegistrationWithErrors(errors));

    const state = store.getState();

    expect(getRegistrationErrors(state)).toEqual(state.registration.errors);
  });
});


describe('getRegistrationLoading selector', () => {
  it('should return a boolean indicating if the registration request is pending', () => {
    const store = createStore(rootReducer);
    store.dispatch(sendRegistration({}));

    const state = store.getState();

    expect(getRegistrationLoading(state)).toBe(state.registration.isPending);
  });
});
