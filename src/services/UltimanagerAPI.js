import axios from 'axios';

import settings from '../settings';


export default class UltimanagerAPI {
  static register(userData) {
    const url = `${settings.API_ROOT}/account/register/`;

    return axios.post(url, userData).then(response => response.data);
  }
}
