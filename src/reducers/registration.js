import { Register } from '../actions';


const defaultState = {
  errors: {},
  isComplete: false,
  isPending: false,
};


export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case Register.REQUEST_COMPLETE:
      return {
        ...state,
        isComplete: true,
        isPending: false,
      };

    case Register.REQUEST_COMPLETE_ERRORED:
      return {
        ...state,
        errors: action.payload,
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
