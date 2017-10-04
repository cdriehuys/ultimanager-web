import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';

import settings from '../../settings';

import UltimanagerAPI from '../UltimanagerAPI';


axios.defaults.host = settings.API_ROOT;
axios.defaults.adapter = httpAdapter;


describe('UltimanagerAPI', () => {
  describe('register', () => {
    it('should send a request and return the response', () => {
      const registrationData = {
        email: 'test@example.com',
        password: 'password',
      };

      const responseData = {
        email: registrationData.email,
      };

      nock(settings.API_ROOT)
        .post('/account/register/', registrationData)
        .reply(201, responseData);

      return UltimanagerAPI.register(registrationData).then((data) => {
        expect(data).toEqual(responseData);
      });
    });
  });
});
