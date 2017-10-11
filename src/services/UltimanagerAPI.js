import axios from 'axios';

import settings from '../settings';


export default class UltimanagerAPI {
  /**
   * Login with the provided credentials and retrieve a token.
   *
   * @param {Object} credentials An object containing the user's email and password.
   *
   * @returns {Object} A promise that resolves to the response data.
   */
  static login(credentials) {
    const url = `${settings.API_ROOT}/auth/login/`;

    return axios.post(url, credentials).then(response => response.data);
  }

  static register(userData) {
    const url = `${settings.API_ROOT}/account/register/`;

    return axios.post(url, userData).then(response => response.data);
  }
}
