import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledForm } from './styles/styledForm';
import axios from 'axios';
import Success from './Success';
import { useHistory } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
//import dotenv from 'dotenv';
//dotenv.config();

//actions
import {
  FIRST_NAME_INPUT,
  LAST_NAME_INPUT,
  USERNAME_INPUT,
  EMAIL_INPUT,
  COMMENT_INPUT,
  SUBMIT,
  CLEAR
} from '../actions/formActions';

const Form = () => {
  const dispatch = useDispatch();

const firstname = useSelector(state => state.formReducer.firstNameInput);
const lastname = useSelector(state => state.formReducer.lastNameInput);
const username = useSelector(state => state.formReducer.userNameInput);
const email = useSelector(state => state.formReducer.emailInput);
const comment = useSelector(state => state.formReducer.commentInput);
const history = useHistory();
console.log('change check', firstname);

const clickSubmit = (e) => {
  e.preventDefault();
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
  console.log('inSubmit');

  const formInfo = {
    firstname: firstname,
    lastname: lastname,
    username: username,
    email: email,
    comment: comment
  };

  emailjs.send(
    serviceId, templateId, formInfo, userId)
    .then(() => {
      history.push('/success');
      //After successfully sent, the store data is cleared
      dispatch({type: CLEAR});
      })
    .catch(err => {
      console.log('error emailjs', err);
      //After failure, the store data is cleared
      dispatch({type: CLEAR});
      history.push('./failure');
    });
  
  
  
}


  return (
    <StyledForm>
      <h1>Form to Google Doc Zap</h1>
      <h2>Press Submit and Your information will be sent to me<br />and added to a google doc!</h2>
      <div className='form-group'>
        <form id='form'
        onSubmit={e => clickSubmit(e)}
        >
          <label>First Name
            <br />
            <input 
            type='text'
            id='firstNameInput'
            placeholder='Fist Name'
            value={firstname}
            onChange={(e) => dispatch({type: FIRST_NAME_INPUT, payload: e.target.value})}
            required
            />
          </label>
          <br />
          <label>Last Name
            <br />
            <input 
            type='text'
            id='lastNameInput'
            placeholder='Last Name'
            value={lastname}
            onChange={(e) => dispatch({type: LAST_NAME_INPUT, payload: e.target.value})}
            required
            />
          </label>
          <br />
          <label>User Name
            <br />
            <input 
            type='text'
            id='userNameInput'
            placeholder='User Name'
            value={username}
            onChange={(e) => dispatch({type: USERNAME_INPUT, payload: e.target.value})}
            required
            />
          </label>
          <br />
          <label>Email
          <br />
          <input type="email" 
            className="form-control email-form" 
            id="emailInput" placeholder="Email" 
            name="emailInput" 
            aria-required="true"
            value={email}
            onChange={(e) => dispatch({type: EMAIL_INPUT, payload: e.target.value})}
            required/>
          </label>
          <br />
          <label>Comment
          <br />
          <textarea 
            form="form" 
            className="form-control email-form" 
            id="commentInput" 
            name="commentInput" 
            placeholder="What's up?" 
            cols="20" 
            rows="5" 
            aria-required="true"
            value={comment}
            onChange={(e) => dispatch({type: COMMENT_INPUT, payload: e.target.value})}
            required>
          </textarea>
          </label>
          <br />
          <button 
            type="submit" 
            id="submit-button"
            className="btn btn-default" 
            >
              Submit
            </button>
        </form>
      </div>
    </StyledForm>
  );
}


export default Form;