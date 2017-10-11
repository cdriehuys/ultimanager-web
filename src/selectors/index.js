/**
 * Selectors for pulling pieces of the Redux state.
 */


/**
 * Get a boolean indicating if the registration has completed.
 *
 * @param {Object} state The current application state
 *
 * @returns {boolean} A boolean indicating if the current registration operation is complete.
 */
export const getRegistrationComplete = state => state.registration.isComplete;


/**
 * Get the registration errors from state.
 *
 * @param  {Object} state The current application state.
 *
 * @returns {Object} An object containing any errors with the current registration attempt.
 */
export const getRegistrationErrors = state => state.registration.errors;


/**
 * Get a boolean indicating if the registration request is loading.
 *
 * @param {Object} state The current application state.
 *
 * @returns {boolean} A boolean indicating if the current registration request is pending.
 */
export const getRegistrationLoading = state => state.registration.isPending;
