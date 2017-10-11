/**
 * Action creators for creating authentication related actions.
 */

import { Authenticate } from '../actions';
import UltimanagerAPI from '../services/UltimanagerAPI';


/**
 * Create an action signaling the completion of a successful login request.
 *
 * @param {Object} payload An object containing the results of the login attempt.
 * @param {string} payload.token The token received from the login request.
 *
 * @returns {Object} An action with a type that indicates the completion of a succesful login
 *                   request.
 */
export const completeLogin = payload => ({
  type: Authenticate.LOGIN_COMPLETE,
  payload,
});


/**
 * Create an action signaling the failure of a login attempt.
 *
 * @param {Object} payload An object containing the results of the login attempt.
 * @param {Object} payload.errors An object containing the errors from the login attempt.
 *
 * @returns {Object} An action describing the result of the failed login attempt.
 */
export const failLogin = payload => ({
  type: Authenticate.LOGIN_FAILED,
  payload,
});


/**
 * Create an action signaling the start of a login request.
 *
 * @returns {Object} An action with a type indicating the start of a login request.
 */
export const startLogin = () => ({ type: Authenticate.LOGIN_START });


/**
 * Start a login attempt and dispatch the appropriate actions.
 *
 * @param {string} email The user's email address.
 * @param {string} password The user's password.
 *
 * @returns {function} A function that dispatches the appropriate actions once the login request
 *                     completes.
 */
export default (email, password) => (dispatch) => {
  dispatch(startLogin());

  return UltimanagerAPI.login({ email, password })
    .then((data) => {
      dispatch(completeLogin(data));
    })
    .catch((error) => {
      dispatch(failLogin(error.response.data));
    });
};
