import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledForm } from './styles/styledForm';
import { useHistory } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
//actions
import {
  FIRST_NAME_INPUT,
  LAST_NAME_INPUT,
  USERNAME_INPUT,
  EMAIL_INPUT,
  COMMENT_INPUT,
  CLEAR
} from '../actions/formActions';

const Form = () => {
  const dispatch = useDispatch();
  //variables to set up data obj, and display state in form inputs
  const firstname = useSelector(state => state.formReducer.firstNameInput);
  const lastname = useSelector(state => state.formReducer.lastNameInput);
  const username = useSelector(state => state.formReducer.userNameInput);
  const email = useSelector(state => state.formReducer.emailInput);
  const comment = useSelector(state => state.formReducer.commentInput);
  //history is used to push to a new url
  const history = useHistory();

  //handle form submission
  const clickSubmit = (e) => {
    e.preventDefault();
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;

    const formInfo = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      comment: comment
    };

  //emailjs sends the data from an SMTP server to the Zapier email address
  emailjs.send(
    serviceId, templateId, formInfo, userId)
    .then(() => {
      //on success the success coponent is shown
      history.push('/success');
      //After successfully sent, the store data is cleared
      dispatch({type: CLEAR});
      })
    .catch(err => {
      console.log('error emailjs', err);
      //on success the success coponent is shown
      history.push('./failure');
      //After failure, the store data is cleared
      dispatch({type: CLEAR});
    });
  }

  return (
    <StyledForm>
      <h1>Form to Google Sheet Zap</h1>
      <h2>Press Submit and your information and it will be added to a google doc!</h2>
      <p>If successful you will be given a link to see the sheet!</p>
      <br />
      <p>Please keep your made up information G rated! </p>
      <div className='form-group'>
        <form id='form'
        onSubmit={e => clickSubmit(e)}
        >
          <label>First Name
            <br />
            <input 
            type='text'
            id='firstNameInput'
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
            id="emailInput" 
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