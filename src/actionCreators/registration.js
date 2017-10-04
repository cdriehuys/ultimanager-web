import { Register } from '../actions';
import UltimanagerAPI from '../services/UltimanagerAPI';


export const completeRegistration = payload => ({
  type: Register.REQUEST_COMPLETE,
  payload,
});


export const sendRegistration = payload => ({
  type: Register.REQUEST_SEND,
  payload,
});


export const register = payload => (dispatch) => {
  dispatch(sendRegistration(payload));

  return UltimanagerAPI.register(payload).then((data) => {
    dispatch(completeRegistration(data));
  });
};
