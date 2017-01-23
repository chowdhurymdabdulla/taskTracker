import { combineReducers } from 'redux';
import TaskReducer from './task'
const rootReducer = combineReducers({
  tasks : TaskReducer
});

export default rootReducer;
