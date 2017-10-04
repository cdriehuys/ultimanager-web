import { Register } from '../actions';


export default (state = { isPending: false }, action = {}) => {
  switch (action.type) {
    case Register.REQUEST_COMPLETE:
      return {
        ...state,
        isPending: false,
      };

    case Register.REQUEST_SEND:
      return {
        ...state,
        isPending: true,
      };

    default:
      return state;
  }
};
