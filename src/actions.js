/**
 * Constants to describe different Redux actions.
 */


// Authentication Actions
export const Authenticate = {
  LOGIN_COMPLETE: 'Authenticate :: Complete Login Request',
  LOGIN_FAILED: 'Authenticate :: Fail Login Request',
  LOGIN_START: 'Authenticate :: Start Login Request',
};


// Registration Actions
export const Register = {
  REQUEST_COMPLETE: 'Register :: Request Complete',
  REQUEST_COMPLETE_ERRORED: 'Register :: Request Complete w/ Errors',
  REQUEST_SEND: 'Register :: Request Start',
};


// Team Actions
export const ADD_TEAM = 'ADD_TEAM';
