import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Register } from '../../actions';
import rootReducer from '../../reducers';
import UltimanagerAPI from '../../services/UltimanagerAPI';

import {
  completeRegistration,
  completeRegistrationWithErrors,
  register,
  sendRegistration,
} from '../registration';


jest.mock('../../services/UltimanagerAPI');


const middlewares = [thunk];
const mockStore = createStore(middlewares);


describe('Registration Action Creators', () => {
  describe('completeRegistration', () => {
    it('should create an action completing the registration request', () => {
      const registrationData = { email: 'test@example.com' };
      const expected = {
        type: Register.REQUEST_COMPLETE,
        payload: registrationData,
      };

      expect(completeRegistration(registrationData)).toEqual(expected);
    });
  });

  describe('completeRegistrationWithErrors', () => {
    it('should create an action containing the errors from the request', () => {
      const errors = { email: 'Invalid email address.' };
      const expected = {
        type: Register.REQUEST_COMPLETE_ERRORED,
        payload: errors,
      };

      expect(completeRegistrationWithErrors(errors)).toEqual(expected);
    });
  });

  describe('sendRegistration', () => {
    it('should create an action to register a user', () => {
      const user = {
        email: 'test@example.com',
        password: 'password',
      };
      const expected = {
        type: Register.REQUEST_SEND,
        payload: user,
      };

      expect(sendRegistration(user)).toEqual(expected);
    });
  });

  describe('register', () => {
    it('should dispatch actions to start and finish a successful request', () => {
      const store = mockStore(rootReducer());
      const userData = { email: 'test@example.com', password: 'password' };
      const responseData = { email: userData.email };

      return store.dispatch(register(userData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(sendRegistration(userData));
        expect(actions[1]).toEqual(completeRegistration(responseData));
      });
    });

    it('should dispatch actions to start and finish a request with errors', () => {
      const store = mockStore(rootReducer());
      const userData = { email: 'test@example.com', password: 'password' };
      const errors = { email: ['Invalid email address.'] };

      UltimanagerAPI.register.mockImplementationOnce(() => Promise.reject({
        response: {
          data: errors,
        },
      }));

      return store.dispatch(register(userData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(sendRegistration(userData));
        expect(actions[1]).toEqual(completeRegistrationWithErrors(errors));
      });
    });
  });
});
