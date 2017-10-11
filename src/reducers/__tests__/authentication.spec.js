import { completeLogin, failLogin, startLogin } from '../../actionCreators/authentication';

import authenticationReducer from '../authentication';


describe('Authentication Reducer', () => {
  it('should have some initial state', () => {
    const expected = {
      isPending: false,
      loginErrors: {},
      token: '',
    };

    expect(authenticationReducer()).toEqual(expected);
  });

  it('should handle successfully completing a login request', () => {
    const state = authenticationReducer();
    state.isPending = true;

    const action = completeLogin({ token: 'foo' });

    const expected = {
      ...state,
      ...action.payload,
      isPending: false,
    };

    expect(authenticationReducer(state, action)).toEqual(expected);
  });

  it('should handle actions indicating a failed login attempt', () => {
    const loginErrors = { non_field_errors: ["Username and password don't match."] };

    const state = authenticationReducer();
    state.isPending = true;

    const action = failLogin({ loginErrors });

    const expected = {
      ...state,
      isPending: false,
      loginErrors,
    };

    expect(authenticationReducer(state, action)).toEqual(expected);
  });

  it('should handle starting a login request', () => {
    const state = authenticationReducer();
    const action = startLogin();

    const expected = {
      ...state,
      isPending: true,
    };

    expect(authenticationReducer(state, action)).toEqual(expected);
  });
});
