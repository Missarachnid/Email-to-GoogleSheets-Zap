import React from 'react';
import { 
  AUTH_TOGGLE, 
  PW_UPDATE, 
  CLEAR} from '../actions/formActions';
import { useSelector, useDispatch } from 'react-redux';
import { StyledForm } from './styles/styledForm';
import { useHistory } from 'react-router-dom';

const Home = () => {
  //A password protects from service being over used
  const pw = useSelector(state => state.formReducer.pwInput);
  const dispatch = useDispatch();
  const compare = process.env.REACT_APP_PASS;
  const history = useHistory();

  const clickSubmit = (e) => {
    e.preventDefault();
    
    if(pw === compare ){
      dispatch({type: AUTH_TOGGLE})
      //clears the input on submit
      dispatch({type: CLEAR});
      //On success of password entry, user is pushed to the form
      history.push('/form');
    }
  }

  return (
    <StyledForm>
      <h1>To use this project and view Zap results,<br/>you must enter a code from the project's GitHub Repository.</h1>
      <div>
        <form id='zap-form'
          onSubmit={e => clickSubmit(e)}
        >
        <label>Enter Code
          <br />
          <input 
          type='text'
          id='codeInput'
          placeholder='What is the Code?'
          value={pw}
          onChange={(e) => dispatch({type: PW_UPDATE, payload: e.target.value})}
          required
          />
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
  )
}
export default Home;