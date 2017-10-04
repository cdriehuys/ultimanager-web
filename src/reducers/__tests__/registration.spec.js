import { completeRegistration, sendRegistration } from '../../actionCreators/registration';

import registrationReducer from '../registration';


describe('Registration Reducer', () => {
  it('should have some initial state', () => {
    const expected = {
      isPending: false,
    };

    expect(registrationReducer()).toEqual(expected);
  });

  it('should handle completing the request successfully', () => {
    const data = { email: 'test@example.com' };
    const action = completeRegistration(data);

    // Create initial state with pending registration
    const initialState = registrationReducer();
    initialState.isPending = true;

    const expected = {
      ...initialState,
      isPending: false,
    };

    expect(registrationReducer(initialState, action)).toEqual(expected);
  });

  it('should handle REQUEST_REGISTER actions', () => {
    const user = { email: 'test@example.com', password: 'password' };
    const action = sendRegistration(user);

    const initialState = registrationReducer();
    const expected = {
      ...initialState,
      isPending: true,
    };

    expect(registrationReducer(initialState, action)).toEqual(expected);
  });
});
