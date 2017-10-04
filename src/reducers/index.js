import { combineReducers } from 'redux';

import registration from './registration';
import teams from './teams';


export default combineReducers({
  registration,
  teams,
});
