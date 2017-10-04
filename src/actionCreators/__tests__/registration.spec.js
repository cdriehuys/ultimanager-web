import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Register } from '../../actions';
import rootReducer from '../../reducers';

import { completeRegistration, register, sendRegistration } from '../registration';


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
  });
});
