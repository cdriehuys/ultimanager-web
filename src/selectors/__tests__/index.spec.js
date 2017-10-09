import { createStore } from 'redux';

import { completeRegistrationWithErrors } from '../../actionCreators/registration';
import rootReducer from '../../reducers';

import { getRegistrationErrors } from '../';


describe('getRegistrationErrors selector', () => {
  it('should return the registration errors stored in state', () => {
    const errors = { email: ['Invalid email address.'] };

    const store = createStore(rootReducer);
    store.dispatch(completeRegistrationWithErrors(errors));

    expect(getRegistrationErrors(store.getState())).toEqual(errors);
  });
});
