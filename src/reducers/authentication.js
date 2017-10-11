/**
 * Reducer for authentication related state.
 */

import { Authenticate } from '../actions';


const defaultState = {
  isPending: false,
  loginErrors: {},
  token: '',
};


export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case Authenticate.LOGIN_COMPLETE:
    case Authenticate.LOGIN_FAILED:
      return {
        ...state,
        ...action.payload,
        isPending: false,
      };

    case Authenticate.LOGIN_START:
      return {
        ...state,
        isPending: true,
      };

    default:
      return state;
  }
};
