import { combineReducers } from 'redux';

import authentication from './authentication';
import registration from './registration';
import teams from './teams';


export default combineReducers({
  authentication,
  registration,
  teams,
});
