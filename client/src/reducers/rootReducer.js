import { combineReducers } from 'redux';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  formReducer: formReducer
});

export default rootReducer;