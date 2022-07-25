import { combineReducers } from 'redux';

import userReducer from './userReducer';
import recipesReducer from './recipesReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  userReducer,
  recipesReducer,
  menuReducer,
});

export default rootReducer;
