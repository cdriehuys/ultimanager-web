import { combineReducers } from 'redux';

import { ADD_TEAM } from '../actions';


export const teamsByIdReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_TEAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
};


export default combineReducers({
  byId: teamsByIdReducer,
});
