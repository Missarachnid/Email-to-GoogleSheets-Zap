import '../css/App.css';
import { useSelector } from 'react-redux';
import { StyledForm } from './styles/styledForm';
import {
  FIRST_NAME_INPUT,
  LAST_NAME_INPUT,
  USERNAME_INPUT,
  EMAIL_INPUT,
  COMMENT_INPUT,
  SUBMIT
} from '../actions/formActions';

function App() {
  const formData = useSelector(state => state.formData)
  return (
    <StyledForm>
      <h1>Form to Google Doc Zap</h1>
      <h2>Press Submit and Your information will be sent to me<br />and added to a google doc!</h2>
      <div className='form-group'>
        <form id='form'>
          <label>First Name
            <br />
            <input 
            type='text'
            id='firstNameInput'
            placeholder='Fist Name'
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
            required/>
          </label>
          <br />
          <label>Message
          <br />
          <textarea 
            form="form" 
            className="form-control email-form" 
            id="messageInput" 
            name="messageInput" 
            placeholder="What's up?" 
            cols="20" 
            rows="5" 
            aria-required="true"
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

export default App;
