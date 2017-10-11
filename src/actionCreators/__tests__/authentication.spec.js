import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Authenticate } from '../../actions';
import rootReducer from '../../reducers';
import UltimanagerAPI from '../../services/UltimanagerAPI';

import login, { completeLogin, failLogin, startLogin } from '../authentication';


jest.mock('../../services/UltimanagerAPI');


const middlewares = [thunk];
const mockStore = createStore(middlewares);


describe('Authentication Action Creators', () => {
  describe('completeLogin', () => {
    it('should create an action describing the completion of a login request', () => {
      const token = 'foo';
      const expected = {
        type: Authenticate.LOGIN_COMPLETE,
        payload: { token },
      };

      expect(completeLogin({ token })).toEqual(expected);
    });
  });

  describe('failLogin', () => {
    it('should create an action describing the failure of a login attempt', () => {
      const errors = { non_field_errors: ["Username and password don't match."] };
      const expected = {
        type: Authenticate.LOGIN_FAILED,
        payload: { errors },
      };

      expect(failLogin({ errors })).toEqual(expected);
    });
  });

  describe('startLogin', () => {
    it('should create an action describing the start of a login request', () => {
      const expected = {
        type: Authenticate.LOGIN_START,
      };

      expect(startLogin()).toEqual(expected);
    });
  });

  describe('login', () => {
    it('should dispatch actions for a succesful login attempt', () => {
      const store = mockStore(rootReducer());
      const credentials = { email: 'test@example.com', password: 'password' };
      const response = { token: 'token' };

      UltimanagerAPI.login.mockImplementationOnce(() => Promise.resolve(response));

      return store.dispatch(login(credentials.email, credentials.password)).then(() => {
        expect(UltimanagerAPI.login).toHaveBeenCalledWith(credentials);

        const actions = store.getActions();

        expect(actions[0]).toEqual(startLogin());
        expect(actions[1]).toEqual(completeLogin(response));
      });
    });

    it('should dispatch actions for a failed login attempt', () => {
      const store = mockStore(rootReducer());
      const credentials = { email: 'test@example.com', password: 'password' };
      const errors = { non_field_errors: ["Email and password don't match."] };

      UltimanagerAPI.login.mockImplementationOnce(() => Promise.reject({
        response: {
          data: errors,
        },
      }));

      return store.dispatch(login(credentials.email, credentials.password)).then(() => {
        expect(UltimanagerAPI.login).toHaveBeenCalledWith(credentials);

        const actions = store.getActions();

        expect(actions[0]).toEqual(startLogin());
        expect(actions[1]).toEqual(failLogin(errors));
      });
    });
  });
});
