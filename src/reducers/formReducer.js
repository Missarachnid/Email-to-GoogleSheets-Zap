import {
  FIRST_NAME_INPUT,
  LAST_NAME_INPUT,
  USERNAME_INPUT,
  EMAIL_INPUT,
  COMMENT_INPUT,
  CLEAR,
  AUTH_TOGGLE,
  PW_UPDATE
} from '../actions/formActions';
import initialState from './initialState';

const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case FIRST_NAME_INPUT: {
      return {
        ...state, 
        firstNameInput: action.payload
      }
    }
    case LAST_NAME_INPUT: {
      return {
        ...state,
        lastNameInput: action.payload
      }
    }
    case USERNAME_INPUT: {
      return {
        ...state,
        userNameInput: action.payload
      }
    }
    case EMAIL_INPUT: {
      return {
        ...state,
        emailInput: action.payload
      }
    }
    case COMMENT_INPUT : {
      return {
        ...state,
        commentInput: action.payload
      }
    }
    case CLEAR: {
      return {
        ...state,
        firstNameInput: '',
        lastNameInput: '',
        userNameInput: '',
        emailInput: '',
        commentInput: ''
      }
    }
    case PW_UPDATE: {
      return {
        ...state,
        pwInput: action.payload
      }
    }
    case AUTH_TOGGLE : {
      return {
        ...state,
        isAuthenticated: !state.isAuthent
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
};

export default formReducer;