import { combineReducers } from 'redux';
import blogs from './blogs';
import nextId from './nextId';
import filter from './filter';

const rootReducer = combineReducers({
  blogs,
  nextId
});

export default rootReducer;
