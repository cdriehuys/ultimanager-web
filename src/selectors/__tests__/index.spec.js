import { createStore } from 'redux';

import { completeRegistration, completeRegistrationWithErrors } from '../../actionCreators/registration';
import rootReducer from '../../reducers';

import { getRegistrationComplete, getRegistrationErrors } from '../';


describe('getRegistrationComplete selector', () => {
  it('should return if the registration is complete', () => {
    const store = createStore(rootReducer);
    store.dispatch(completeRegistration({}));

    expect(getRegistrationComplete(store.getState())).toBe(true);
  });
});


describe('getRegistrationErrors selector', () => {
  it('should return the registration errors stored in state', () => {
    const errors = { email: ['Invalid email address.'] };

    const store = createStore(rootReducer);
    store.dispatch(completeRegistrationWithErrors(errors));

    expect(getRegistrationErrors(store.getState())).toEqual(errors);
  });
});
