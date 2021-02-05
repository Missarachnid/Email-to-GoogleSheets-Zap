import React from 'react';
import { 
  AUTH_TOGGLE, 
  PW_UPDATE, 
  CLEAR} from '../actions/formActions';
import { useSelector, useDispatch } from 'react-redux';
import { StyledForm } from './styles/styledForm';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const pw = useSelector(state => state.formReducer.pwInput);
  const dispatch = useDispatch();
  const compare = process.env.REACT_APP_PASS;
  const history = useHistory();
  const clickSubmit = (e) => {
    e.preventDefault();
    console.log('inSubmitPW', compare);
    
    if(pw === compare ){
      console.log('yes');
      dispatch({type: AUTH_TOGGLE})
      //clears the input on submit
      dispatch({type: CLEAR});
      history.push('/form');
    }
  }

  console.log('pw', pw);
  return (
    <StyledForm>
      <h1>To use this project and view Zap results,<br/>you must enter a code from my resume.</h1>
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