import {
  FIRST_NAME_INPUT,
  LAST_NAME_INPUT,
  USERNAME_INPUT,
  EMAIL_INPUT,
  COMMENT_INPUT,
  SUBMIT
} from '../actions/formActions';
import initialState from './initialState';

const formReducer = (state = initialState, action) => {
  switch(action.type) {
    default : {
      return {
        ...state
      }
    }
  }
};

export default formReducer;