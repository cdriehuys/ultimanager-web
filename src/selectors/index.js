/**
 * Selectors for pulling pieces of the Redux state.
 */


/**
 * Get the registration errors from state.
 *
 * @param  {Object} state The current application state.
 *
 * @returns {Object} An object containing any errors with the current registration attempt.
 */
export const getRegistrationErrors = state => state.registration.errors;


export default {};
